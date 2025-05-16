import React, { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "../../../schema/formSchema";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";

function BlogDialog({ children, onBlogAdded, onBlogUpdated, blogToEdit }) {
    const isEditMode = !!blogToEdit;

    const form = useForm({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: "",
            heading: "",
            description: "",
            image: undefined,
        }
    });

    useEffect(() => {
        if (blogToEdit) {
            form.reset({
                title: blogToEdit.title || "",
                heading: blogToEdit.heading || "",
                description: blogToEdit.description || "",
                image: undefined
            });
        } else {
            form.reset({
                title: "",
                heading: "",
                description: "",
                image: undefined,
            });
        }
    }, [blogToEdit, form]);

    const [isOpen, setIsOpen] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("heading", data.heading);
        formData.append("description", data.description);

        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        }

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Authentication token not found");
            }

            let response;

            if (isEditMode) {
                response = await axios.put(
                    `${import.meta.env.VITE_APP_URL}/blogs/${blogToEdit._id}`,
                    formData,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );


                if (onBlogUpdated) {
                    onBlogUpdated(response.data);
                }
            } else {
                response = await axios.post(
                    `${import.meta.env.VITE_APP_URL}/blogs`,
                    formData,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );


                if (onBlogAdded) {
                    onBlogAdded(response.data);
                }
            }

            form.reset();
            setIsOpen(false);
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || `Failed to ${isEditMode ? 'update' : 'add'} blog`;
            console.log(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] scrollbar-pink min-w-[80vw] overflow-y-auto bg-[#150813]/90 backdrop-blur-md border-[#FE3D76]/30 shadow-lg">
                <DialogHeader className="space-y-2 pb-2 border-b border-[#FE3D76]/30">
                    <DialogTitle className="text-xl font-bold tracking-tight text-white">
                        {isEditMode ? "Edit Blog" : "Add New Blog"}
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                        {isEditMode
                            ? "Update the blog details and click save to update it."
                            : "Fill in the details for the new blog and click save to add it."}
                    </DialogDescription>
                </DialogHeader>
            
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 py-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-4 items-center gap-4">
                                    <FormLabel className="text-right font-medium text-white">Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter blog title"
                                            className="col-span-3 bg-[#2C1228]/50 border-[#FE3D76]/50 text-white focus:ring-2 focus:ring-[#FE3D76] focus:border-[#FE3D76]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="col-span-4 text-[#FE3D76] text-xs mt-1" />
                                </FormItem>
                            )}
                        />
                
                        <FormField
                            control={form.control}
                            name="heading"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-4 items-center gap-4">
                                    <FormLabel className="text-right font-medium text-white">Heading</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter blog heading"
                                            className="col-span-3 bg-[#2C1228]/50 border-[#FE3D76]/50 text-white focus:ring-2 focus:ring-[#FE3D76] focus:border-[#FE3D76]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="col-span-4 text-[#FE3D76] text-xs mt-1" />
                                </FormItem>
                            )}
                        />
                
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-4 items-start gap-4">
                                    <FormLabel className="text-right pt-2 font-medium text-white">Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter blog description"
                                            className="col-span-3 min-h-[250px] min-w-[200px] whitespace-pre-wrap font-mono bg-[#2C1228]/50 border-[#FE3D76]/50 text-white focus:ring-2 focus:ring-[#FE3D76] focus:border-[#FE3D76]"
                                            style={{
                                                resize: "both",
                                                overflow: "auto",
                                            }}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="col-span-4 text-[#FE3D76] text-xs mt-1" />
                                </FormItem>
                            )}
                        />
                
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-4 items-center gap-4">
                                    <FormLabel className="text-right font-medium text-white">
                                        {isEditMode ? "New Image (Optional)" : "Image"}
                                    </FormLabel>
                                    <FormControl>
                                        <div className="col-span-3 w-full">
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-[#FE3D76]/20 file:text-[#FE3D76] hover:file:bg-[#FE3D76]/30 text-white bg-[#2C1228]/50 border-[#FE3D76]/50"
                                                onChange={(e) => {
                                                    field.onChange(e.target.files);
                                                }}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="col-span-4 text-[#FE3D76] text-xs mt-1" />
                                </FormItem>
                            )}
                        />
                
                        {isEditMode && blogToEdit.image && (
                            <div className="grid grid-cols-4 items-center gap-4">
                                <div className="text-right text-sm text-gray-300 font-medium">Current Image</div>
                                <div className="col-span-3">
                                    <div className="relative overflow-hidden rounded-md border border-[#FE3D76]/30 max-w-xs">
                                        <img
                                            src={`${import.meta.env.VITE_APP_URL}/${blogToEdit.image}`}
                                            alt="Current blog image"
                                            className="h-24 w-full object-cover transition-transform hover:scale-105"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/600x400?text=Current+Image";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                
                        <div className="mt-4 pt-4 border-t border-[#FE3D76]/30">
                            <DialogFooter className="gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsOpen(false)}
                                    disabled={isSubmitting}
                                    className=""
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="bg-[#FE3D76] hover:bg-[#FE3D76]/80 text-white hover:text-white border-none"
                                >
                                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {isEditMode ? "Update Blog" : "Add Blog"}
                                </Button>
                            </DialogFooter>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default BlogDialog;