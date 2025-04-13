import './Login.style.scss';
import { Form } from '@/components/Form/Form';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { useAuth } from '@/store/useAuth';
import { useState } from 'react';

export const Login = () => {
  const login = useAuth(state => state.login);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field: keyof typeof formData) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

  const handleLogin = () => {
    const { email, password } = formData;
    if (email && password) {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <h1 className="logo">Вишлистикс</h1>
      <Form>
        <h2 className="login__title">Авторизация</h2>
        <Input
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        <Input
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
          value={formData.password}
          onChange={handleChange("password")}
        />
        <Button
          text="Войти"
          type="black"
          onClick={handleLogin}
        />
        <p className="login__question">
          Нет аккаунта?
          <span className="login__to-registration">Зарегистрироваться</span>
        </p>
      </Form>
    </div>
  );
};