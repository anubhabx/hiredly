// src/components/providers/AuthProvider.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { UserCredential } from "firebase/auth";

// Define the shape of our auth context
interface AuthContextType {
  user: {
    uid: string;
    email: string | null;
    displayName?: string;
    photoURL?: string | null;
  } | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  initialized: boolean;
  signUpWithEmailAndPassword: (email: string, password: string, displayName?: string) => Promise<UserCredential>;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};