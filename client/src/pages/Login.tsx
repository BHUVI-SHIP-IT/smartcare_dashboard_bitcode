import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse, Mail, Lock } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const [, setLocation] = useLocation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const success = login(email, password);
        if (success) {
            setLocation('/');
        } else {
            setError('Please enter valid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo/Branding */}
                <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 shadow-lg shadow-primary/20">
                        <HeartPulse className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                        SmartCare
                    </h1>
                    <p className="text-muted-foreground">
                        AI-Driven Post-Hospitalization Care
                    </p>
                </div>

                {/* Login Card */}
                <Card className="border-none shadow-2xl shadow-slate-200/50 dark:shadow-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-heading text-center">Welcome Back</CardTitle>
                        <CardDescription className="text-center">
                            Sign in to access your dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="doctor@smartcare.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                                    {error}
                                </div>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full h-11 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200"
                            >
                                Sign In
                            </Button>

                            {/* Demo Info */}
                            <div className="mt-6 p-4 bg-accent/50 rounded-lg border border-primary/20">
                                <p className="text-xs text-center text-muted-foreground">
                                    <span className="font-semibold text-foreground">Demo Mode:</span> Enter any email and password to sign in
                                </p>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Footer */}
                <p className="text-center text-xs text-muted-foreground mt-8 animate-in fade-in duration-700 delay-300">
                    © 2024 SmartCare. All rights reserved.
                </p>
            </div>
        </div>
    );
}
