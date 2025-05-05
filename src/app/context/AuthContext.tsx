'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from "@/types/user";

// Tipe data untuk seller registration
type SellerRegistrationData = {
  email: string;
  password: string;
} | null;

// Tipe data untuk context
type AuthContextType = {
  user: User | null; // Perbaikan tipe data
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  sellerRegistrationData: SellerRegistrationData;
  setSellerRegistrationData: (data: SellerRegistrationData) => void;
  clearSellerRegistrationData: () => void;
};

// Membuat context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Perbaikan tipe data
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [sellerRegistrationData, setSellerRegistrationData] = useState<SellerRegistrationData>(null);

  // Cek localStorage saat aplikasi dimuat
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data from localStorage', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Fungsi untuk login
  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
    // Simpan user ke localStorage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Hapus user dari localStorage
    localStorage.removeItem('user');
  };

  // Fungsi untuk menghapus data registrasi seller
  const clearSellerRegistrationData = () => {
    setSellerRegistrationData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        sellerRegistrationData,
        setSellerRegistrationData,
        clearSellerRegistrationData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};