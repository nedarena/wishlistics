import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from 'axios';

type State = {
  isAuthenticated: boolean,
  token: string | null
}

type Actions = {
  login: (email: string, password: string) => Promise<void>,
  logout: () => void,
  checkAuth: () => boolean
}

// Refactor подумать над стилизацией кода
export const useAuth = create<State & Actions>()(
  persist((set, get) => ({
    isAuthenticated: false, 
    token: null,
    login: async (email, password) => {
      try {
        const res = await axios.post('http://localhost:3000/api/auth/login', {
          email,
          password
        });

        const token = res.data.token;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        set({
          isAuthenticated: true,
          token: token
        })
      } catch (err) {
        console.error('Login Failed', err);
        throw err;
      }
    },
    logout: () => {
      delete axios.defaults.headers.common['Authorization'];
      set({
        isAuthenticated: false, 
        token: null
      });
    },
    checkAuth: () => get().isAuthenticated,
  }), {
    name: 'user-auth'
  })
)