import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUploader } from "react-drag-drop-files";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "./schema/FileUploadSchema";
import { useUploadImageMutation } from "./redux/slices/apiSlice";
import { Upload, Check, X, Loader2, FileIcon, Trash2 } from 'lucide-react';

const UploadForm = () => {
  const [uploadImage, { isLoading, isSuccess, error }] = useUploadImageMutation();
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const fileTypes = ["JPG", "PNG", "PDF", "JPEG"];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      files: [],
    },
  });

  const handleSubmit = async (values) => {
    const formData = new FormData();
    values.files.forEach((file) => {
      formData.append('images', file);
    });
    
    try {
      await uploadImage(formData).unwrap();
    } catch (err) {
      console.error('Failed to upload files:', err);
    }
  };

  const handleChange = (newFiles) => {
    const fileArray = newFiles instanceof FileList ? Array.from(newFiles) : 
                      Array.isArray(newFiles) ? newFiles : [newFiles];
    
    if (fileArray.length > 0) {
      const updatedFiles = [...files];
      fileArray.forEach(file => {
        if (updatedFiles.length < 5) {
          updatedFiles.push(file);
        }
      });
      
      setFiles(updatedFiles);
      form.setValue('files', updatedFiles, { shouldValidate: true });
    }
  };

  const onFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    handleChange(newFiles);
  };

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    form.setValue('files', updatedFiles, { shouldValidate: true });
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Upload Incident Documents</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="files"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        id="file-upload"
                        accept=".jpg,.jpeg,.png,.pdf"
                        multiple
                        onChange={onFileChange}
                      />
                      
                      <FileUploader
                        handleChange={handleChange} 
                        name="file"
                        types={fileTypes}
                        multiple
                        maxSize={10}
                        disabled={files.length >= 5}
                        classes="dropzone cursor-pointer"
                        hoverTitle="Drop here"
                      >
                        <div className="border-2 border-dashed rounded-lg p-6 text-center transition-colors border-gray-300 hover:border-black  ">
                          <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start ">
                            <Upload className="h-10 w-10 text-gray-400" />

                            <div>
                              <p className="text-sm text-gray-600">
                                Select up to 5 files or drag and drop here
                              </p>
                              <p className="text-xs text-gray-500">
                                JPG, PNG or PDF, file size no more than 10MB each
                              </p>
                            </div>
                          </div>
                        </div>
                      </FileUploader>
                    </div>
                  </FormControl>
                  
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium">Selected Files ({files.length}/5):</p>
                      <div className="space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 border rounded">
                            <div className="flex items-center gap-2">
                              <FileIcon className="h-4 w-4 text-blue-600" />
                              <span className="text-sm truncate max-w-xs">{file.name}</span>
                              <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <FormMessage />
                  <FormDescription className="text-xs m-2">
                    Upload documentation related to the incident (maximum 5 files)
                  </FormDescription>
                </FormItem>
              )}
            />

            {isSuccess && (
              <Alert className="mt-4 mb-4 bg-green-50 border-green-200">
                <Check className="h-4 w-4 text-green-600" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Files have been uploaded successfully.</AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert className="mt-4 bg-red-50 border-red-200">
                <X className="h-4 w-4 text-red-600" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Failed to upload files. Please try again.</AlertDescription>
              </Alert>
            )}
          </CardContent>

          <CardFooter>
            <Button
              type="submit"
              disabled={isLoading || !form.formState.isValid || files.length === 0}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                'Upload Files'
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default UploadForm;