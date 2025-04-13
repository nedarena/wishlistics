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
  registration: (username: string, email: string, password: string) => Promise<void>,
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
    /* Refactor доработать код, сделать более чистым 
      1. Убрать хардкод http://localhost:3000/ - сделать глобальную переменную
      2. Добавить обработку специфических ошибок при ответе с сервера (например, если пользователь есть)
      3. Возможно лучше уточнить типы
      4. Обработка res для отлова ошибок или успеха регистрации
    */
    registration: async (username, email, password) => {
      try {
        const res = await axios.post('http://localhost:3000/api/auth/register', {
          username, 
          email, 
          password
        });

        get().login(email, password);
        return res.data;
      } catch(err) {
        console.error('Registration failed', err);
        throw err;
      }
    },
    checkAuth: () => get().isAuthenticated,
  }), {
    name: 'user-auth'
  })
)