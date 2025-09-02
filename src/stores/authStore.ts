import type { IUser } from '@/lib/data';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import CryptoJS from 'crypto-js';

// Define the shape of our auth store
interface AuthState {
  user: IUser | null;
  token: string | null; // Optional token for API requests
  isAuthenticated: boolean;
  isLoading: boolean;
  saveUser: (user: IUser, token: string) => Promise<void>;
  logout: () => void;
  googleAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      // Login function
      saveUser: async (user: IUser, token: string) => {
        try {
          // This would be an API call to authenticate the user in a real app
          await new Promise(resolve => setTimeout(resolve, 1000));
          set({
            user,
            isAuthenticated: true,
            token
          });
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
      },

      // Logout function
      logout: () => {
        set({ 
          user: null,
          isAuthenticated: false, 
          token: null,
        });
      },

      // Google auth function
      googleAuth: async () => {
        set({ isLoading: true });
        try {
          // This would integrate with the Google OAuth API in a real app
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock Google user for demo
          const mockGoogleUser: IUser = {
            id: 123,
            firstName: 'Google',
            lastName: 'User',
            email: 'google.user@example.com',
            avatar: 'https://ui-avatars.com/api/?name=Google+User',
            isVerified: true,
            createdAt: new Date().toISOString(),
          };
          
          set({ 
            user: mockGoogleUser,
            isAuthenticated: true,
            isLoading: false 
          });
        } catch (error) {
          set({ isLoading: false });
          console.error('Google auth error:', error);
          throw error;
        }
      },
    }),
    {
      name: 'techwaveafrica', // name for the storage
      partialize: (state) => ({ 
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
      // Encrypt data before storing
      storage: {
        getItem: (name) => {
          const encrypted = localStorage.getItem(name);
          if (!encrypted) return null;
          try {
            const bytes = CryptoJS.AES.decrypt(encrypted, import.meta.env.VITE_STORAGE_SECRET || 'centrilearn-default-key');
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            return JSON.parse(decrypted);
          } catch (e) {
            console.error('Error decrypting auth storage:', e);
            return null;
          }
        },
        setItem: (name, value) => {
          const encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), import.meta.env.VITE_STORAGE_SECRET || 'centrilearn-default-key').toString();
          localStorage.setItem(name, encrypted);
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);
