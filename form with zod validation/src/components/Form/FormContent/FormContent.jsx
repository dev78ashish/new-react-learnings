// import React from 'react'

// const FormContent = () => {
//   return (
//     <Card className="w-full max-w-[900px] mx-auto shadow-lg border-t-4 border-t-blue-500">
//             <CardHeader className="bg-gray-50 rounded-t-lg">
//                 <CardTitle className="text-2xl font-bold text-center text-gray-800">Create an Account</CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                         <div>
//                             <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
//                                 <User size={18} className="text-blue-500" />
//                                 Personal Information
//                             </h3>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <FormField
//                                     control={form.control}
//                                     name="name"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Full Name</FormLabel>
//                                             <FormControl>
//                                                 <Input placeholder="Enter your full name" {...field} className="focus-visible:ring-blue-500" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <FormField
//                                     control={form.control}
//                                     name="age"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Age</FormLabel>
//                                             <FormControl>
//                                                 <Input
//                                                     placeholder="Enter your age"
//                                                     type="number"
//                                                     min="18"
//                                                     max="60"
//                                                     {...field}
//                                                     value={field.value === undefined ? '' : field.value}
//                                                     onChange={(e) => {
//                                                         const value = e.target.value === '' ? undefined : parseInt(e.target.value, 10);
//                                                         field.onChange(value);
//                                                     }}
//                                                     className="focus-visible:ring-blue-500"
//                                                 />
//                                             </FormControl>
//                                             <FormDescription>
//                                                 Age must be between 18 and 60
//                                             </FormDescription>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <FormField
//                                     control={form.control}
//                                     name="gender"
//                                     render={({ field }) => (
//                                         <FormItem className="space-y-3">
//                                             <FormLabel>Gender</FormLabel>
//                                             <FormControl>
//                                                 <RadioGroup
//                                                     onValueChange={field.onChange}
//                                                     value={field.value}
//                                                     className="flex space-x-4"
//                                                 >
//                                                     <div className="flex items-center space-x-2">
//                                                         <RadioGroupItem value="male" id="male" />
//                                                         <Label htmlFor="male">Male</Label>
//                                                     </div>
//                                                     <div className="flex items-center space-x-2">
//                                                         <RadioGroupItem value="female" id="female" />
//                                                         <Label htmlFor="female">Female</Label>
//                                                     </div>
//                                                     <div className="flex items-center space-x-2">
//                                                         <RadioGroupItem value="other" id="other" />
//                                                         <Label htmlFor="other">Other</Label>
//                                                     </div>
//                                                 </RadioGroup>
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />
//                             </div>
//                         </div>

//                         <Separator />
                        
//                         <div>
//                             <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
//                                 <Mail size={18} className="text-blue-500" />
//                                 Contact Information
//                             </h3>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <FormField
//                                     control={form.control}
//                                     name="email"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Email Address</FormLabel>
//                                             <FormControl>
//                                                 <Input type="email" placeholder="your.email@example.com" {...field} className="focus-visible:ring-blue-500" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <FormField
//                                     control={form.control}
//                                     name="mobile"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Phone Number</FormLabel>
//                                             <FormControl>
//                                                 <Input type="tel" placeholder="+1 (123) 456-7890" {...field} className="focus-visible:ring-blue-500" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />
//                             </div>
//                         </div>

//                         <Separator />

//                         <div>
//                             <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
//                                 <GraduationCap size={18} className="text-blue-500" />
//                                 Professional Information
//                             </h3>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <FormField
//                                     control={form.control}
//                                     name="percentage"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Graduation Percentage</FormLabel>
//                                             <FormControl>
//                                                 <Input placeholder="Enter percentage (0-100)" type="number" min="0" max="100" step="0.01" {...field} className="focus-visible:ring-blue-500" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <FormField
//                                     control={form.control}
//                                     name="doj"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Date of Joining</FormLabel>
//                                             <Popover>
//                                                 <PopoverTrigger asChild>
//                                                     <FormControl>
//                                                         <Button
//                                                             variant="outline"
//                                                             className={cn(
//                                                                 "w-full pl-3 text-left font-normal border",
//                                                                 !field.value && "text-gray-400"
//                                                             )}
//                                                         >
//                                                             {field.value ? (
//                                                                 format(field.value, "PPP")
//                                                             ) : (
//                                                                 <span>Select a date</span>
//                                                             )}
//                                                             <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                                                         </Button>
//                                                     </FormControl>
//                                                 </PopoverTrigger>
//                                                 <PopoverContent className="w-auto p-0" align="start">
//                                                     <Calendar
//                                                         mode="single"
//                                                         selected={field.value}
//                                                         onSelect={field.onChange}
//                                                         disabled={(date) =>
//                                                             date > new Date() || date < new Date("1900-01-01")
//                                                         }
//                                                         initialFocus
//                                                     />
//                                                 </PopoverContent>
//                                             </Popover>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />
//                             </div>
//                         </div>

//                         <Separator />

//                         <div>
//                             <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
//                                 <MapPin size={18} className="text-blue-500" />
//                                 Address Details
//                             </h3>
//                             <div className="grid grid-cols-1 gap-6">
//                                 <FormField
//                                     control={form.control}
//                                     name="address"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Street Address</FormLabel>
//                                             <FormControl>
//                                                 <Textarea placeholder="Enter your complete address" {...field} className="focus-visible:ring-blue-500" />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />

//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                     <FormField
//                                         control={form.control}
//                                         name="city"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>City</FormLabel>
//                                                 <FormControl>
//                                                     <Input placeholder="Enter city" {...field} className="focus-visible:ring-blue-500" />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />

//                                     <FormField
//                                         control={form.control}
//                                         name="pincode"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Postal/ZIP Code</FormLabel>
//                                                 <FormControl>
//                                                     <Input placeholder="Enter postal code" {...field} className="focus-visible:ring-blue-500" />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />

//                                     <FormField
//                                         control={form.control}
//                                         name="country"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Country</FormLabel>
//                                                 <Select onValueChange={field.onChange} value={field.value}>
//                                                     <FormControl>
//                                                         <SelectTrigger className="focus-visible:ring-blue-500">
//                                                             <SelectValue placeholder="Select your country" />
//                                                         </SelectTrigger>
//                                                     </FormControl>
//                                                     <SelectContent>
//                                                         <SelectItem value="india">India</SelectItem>
//                                                         <SelectItem value="uk">United Kingdom</SelectItem>
//                                                         <SelectItem value="australia">Australia</SelectItem>
//                                                     </SelectContent>
//                                                 </Select>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <Separator />

//                         <div className="flex flex-col items-center gap-6">
//                             <FormField
//                                 control={form.control}
//                                 name="terms"
//                                 render={({ field }) => (
//                                     <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border p-4 w-full max-w-md">
//                                         <FormControl>
//                                             <Checkbox 
//                                                 checked={field.value} 
//                                                 onCheckedChange={field.onChange}
//                                                 className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" 
//                                             />
//                                         </FormControl>
//                                         <div className="space-y-1 leading-none">
//                                             <FormLabel>Accept terms and conditions</FormLabel>
//                                             <FormDescription>
//                                                 You agree to our Terms of Service and Privacy Policy.
//                                             </FormDescription>
//                                         </div>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />

//                             <Button 
//                                 type="submit" 
//                                 className="w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white py-2"
//                             >
//                                 Create Account
//                             </Button>
//                         </div>
//                     </form>
//                 </Form>
//             </CardContent>
//         </Card>
//   )
// }

// export default FormContent