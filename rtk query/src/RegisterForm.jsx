import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useRegisterUserMutation } from './redux/slices/apiSlice';
import { registerForm } from './schema/RegisterFormSchema';



export default function RegisterForm() {
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [registerUser, { isLoading, isError, isSuccess }] = useRegisterUserMutation();

  const form = useForm({
    resolver: zodResolver(registerForm),
    mode: 'onChange',
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      country: '',
      gender: undefined,
      avatar: undefined,
    },
  });

  const { watch } = form;
  
  const avatarFile = watch('avatar');
  
  useEffect(() => {
    if (avatarFile && avatarFile[0]) {
      const file = avatarFile[0];
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      
      return () => URL.revokeObjectURL(url);
    }
  }, [avatarFile]);

  function onSubmit(data) {
    const formData = new FormData();
    formData.append('image', data.avatar[0]);
    formData.append('name', data.name);
    formData.append('mobile', data.mobile);
    formData.append('email', data.email);
    formData.append('country', data.country);
    formData.append('gender', data.gender);
    
    console.log('Sending data:', {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      country: data.country,
      gender: data.gender,
      avatar: data.avatar[0]?.name || 'No file'
    });
  
    registerUser(formData)
      .unwrap()
      .then((response) => {
        console.log('Registration successful:', response);
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        if (error.data) console.error('Server error details:', error.data);
      });
  }
  

  return (
    <Card className="max-w-xl mx-auto shadow-xl rounded-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="avatar"
              render={({ field: { onChange, value, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Avatar</FormLabel>
                  <div className="flex items-center space-x-4">
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          onChange(e.target.files);
                        }}
                        {...fieldProps}
                      />
                    </FormControl>
                    {avatarPreview ? (
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={avatarPreview} alt="Avatar Preview" />
                        <AvatarFallback>Avatar</AvatarFallback>
                      </Avatar>
                    ) : (
                      <Avatar className="h-16 w-16">
                        <AvatarFallback>Avatar</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}