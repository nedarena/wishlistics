import './Login.style.scss';
import { Form } from '@/components/Form/Form';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';

export const Login = () => {
  return (
    <div className='login'>
      <h1 className='logo'>Вишлистикс</h1>
      <Form>
        <h2 className="login__title">Авторизация</h2>
        <Input label='Email' placeholder='example@gmail.com' type='email'></Input>
        <Input label='Пароль' placeholder='введите пароль' type='password'></Input>
        <Button text='войти' type='black' onClick={() => console.log("Кнопка нажата")}></Button>
        <p className='login__question'>Нет аккаунта?<span className='login__to-registration'>Зарегистрироваться</span></p>
      </Form>
    </div>
  )
}