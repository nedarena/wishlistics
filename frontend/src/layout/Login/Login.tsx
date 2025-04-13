import './Login.style.scss';
import { Form } from '@/components/Form/Form';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { useAuth } from '../../store/useAuth';
import { useRef } from 'react';

export const Login = () => {
  // Refactor весь файл. Подумать над стилизацией кода
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const login = useAuth(state => state.login);
  
  const handleLogin = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      login(email, password);
    }
  }

  return (
    <div className='login'>
      <h1 className='logo'>Вишлистикс</h1>
      <Form>
        <h2 className="login__title">Авторизация</h2>
        <Input ref={emailRef} label='Email' placeholder='example@gmail.com' type='email'></Input>
        <Input ref={passwordRef} label='Пароль' placeholder='введите пароль' type='password'></Input>
        <Button text='войти' type='black' onClick={handleLogin} />
        <p className='login__question'>Нет аккаунта?<span className='login__to-registration'>Зарегистрироваться</span></p>
      </Form>
    </div>
  )
}