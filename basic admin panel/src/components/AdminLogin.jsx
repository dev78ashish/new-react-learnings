import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Eye, EyeOff, LoaderIcon, Lock, Mail } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { loginSchema } from "../schema/formSchema"
import { useDispatch } from "react-redux"
import { login } from "../redux/slices/authSlice"
import axios from "axios"
import Background from "./Background"

export default function AdminLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [formAppear, setFormAppear] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Animation effect when component mounts
    useEffect(() => {
        setFormAppear(true);
    }, []);

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: 'onChange'
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            setError(null);

            const res = await axios.post(`${import.meta.env.VITE_APP_URL}/user/login`, {
                email: data.email,
                password: data.password
            });
    
            dispatch(login(res.data.token));
            navigate('/');

        } catch (e) {
            if (e.response && e.response.data.message) {
                setError(e.response.data.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <Background />
            <div 
                className={`pay-box backdrop-blur-lg p-10 rounded-2xl shadow-2xl 
                            w-full max-w-md space-y-8 border border-purple-900/20 
                            transition-all duration-700 ease-out 
                            ${formAppear ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Admin Portal</h1>
                    <p className="text-purple-200/60">Sign in to your account</p>
                </div>

                {error && (
                    <div className="bg-red-900/30 text-red-300 p-4 rounded-lg text-sm flex items-start border border-red-800/40">
                        <span className="font-medium">{error}</span>
                    </div>
                )}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-purple-100">Email</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-purple-300" />
                                            <Input 
                                                type="email" 
                                                placeholder="you@example.com" 
                                                className="pl-10 bg-[#2a1429]/50 border-purple-900/30 text-white 
                                                        focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                                                        transition-all duration-300" 
                                                {...field} 
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-pink-300" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-purple-100">Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-300" />
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                className="pl-10 bg-[#2a1429]/50 border-purple-900/30 text-white
                                                        focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                                                        transition-all duration-300"
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-3 top-3 text-purple-300 hover:text-purple-100 transition-colors"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </FormControl>
                                    {/* <div className="flex justify-end">
                                        <Link
                                            to="/change-password"
                                            className="text-sm text-purple-300 hover:text-purple-100 font-medium transition-colors"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div> */}
                                    <FormMessage className="text-pink-300" />
                                </FormItem>
                            )}
                        />

                        <Button 
                            type="submit" 
                            className="w-full py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700
                                    text-white font-medium rounded-lg transition-all duration-300 
                                    shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 shadow-custom" 
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <LoaderIcon className="animate-spin h-4 w-4" />
                                    Authenticating...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}