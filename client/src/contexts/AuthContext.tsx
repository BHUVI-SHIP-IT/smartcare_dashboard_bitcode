import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    user: { name: string; email: string } | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    // Check localStorage on mount
    useEffect(() => {
        const storedAuth = localStorage.getItem('smartcare_auth');
        if (storedAuth) {
            const authData = JSON.parse(storedAuth);
            setIsAuthenticated(true);
            setUser(authData.user);
        }
    }, []);

    const login = (email: string, password: string): boolean => {
        // Dummy authentication - accept any non-empty credentials
        if (email.trim() && password.trim()) {
            const userData = {
                name: 'Dr. Smith',
                email: email,
            };

            setIsAuthenticated(true);
            setUser(userData);
            localStorage.setItem('smartcare_auth', JSON.stringify({ user: userData }));
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('smartcare_auth');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
