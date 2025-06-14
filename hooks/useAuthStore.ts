import { create } from 'zustand';

interface AuthStore {
  isLoading: boolean;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>; // ✅ Add login
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,
  signup: async (email, password) => {
    set({ isLoading: true });
    try {
      // signup logic here
      console.log('Signing up:', email);
    } catch (err) {
      console.error('Signup error:', err);
    } finally {
      set({ isLoading: false });
    }
  },
  login: async (email, password) => {
    set({ isLoading: true });
    try {
      // login logic here
      console.log('Logging in:', email);
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
