import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { changePasswordSchema } from "../schema/formSchema"
import { Link } from "react-router-dom"

export default function ChangePassword() {
    const form = useForm({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            email: "",
        },
        mode: "onChange",
    })

    const onSubmit = (data) => {
        console.log("Reset Request:", data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted">
            <div className="bg-white dark:bg-background p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Reset Your Password</h1>
                    <p className="text-muted-foreground mt-1">Enter your email to receive reset instructions</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="you@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Send Reset Link
                        </Button>

                        <div className="text-right text-sm">
                            <Link
                                to="/login"
                                className="text-primary hover:underline"
                            >
                                Login?
                            </Link>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
