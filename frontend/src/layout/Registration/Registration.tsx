import './Registration.style.scss';
import { Form } from '@/components/Form/Form';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';

export const Registration = () => {
  return (
    // <div className='registration'>
    //   <h1 className='logo'>Вишлистикс</h1>
    //   <Form>
    //     <div className="registration__header">
    //       <div className="registration__text">
    //         <h2 className="registration__title">Регистрация</h2>
    //         <p className="registration__subtitle">Создание аккаунта</p>
    //       </div>
    //       <p className="registration__step">Шаг 1 из 2</p>
    //     </div>
    //     <Input label='Email' placeholder='example@gmail.com' type='email'></Input>
    //     <Input label='Пароль' placeholder='введите пароль' type='password'></Input>
    //     <Button text='продолжить' type='black' onClick={() => console.log("Кнопка нажата")}></Button>
    //     <p className='registration__question'>У вас есть аккаунт?<span className='registration__to-login'>Войти</span></p>
    //   </Form>
    // </div>
    <div className='registration'>
    <h1 className='logo'>Вишлистикс</h1>
    <Form>
      <div className="registration__header">
        <div className="registration__text">
          <h2 className="registration__title">Регистрация</h2>
          <p className="registration__subtitle">Создание аккаунта</p>
        </div>
        <p className="registration__step">Шаг 2 из 2</p>
      </div>
      <div className="registration__input-block">
        <Input label='Имя' placeholder='Иван' type='text'></Input>
        <Input label='Фамилия' placeholder='Иванов' type='text'></Input>
      </div>
      <Input label='Дата рождения' placeholder='' type='date'></Input>
      <div className="registration__button-block">
        <Button text='назад' type='white' onClick={() => console.log("Кнопка нажата")}></Button>
        <Button text='зарегистрироваться' type='black' onClick={() => console.log("Кнопка нажата")}></Button>
      </div>
      
      <p className='registration__question'>У вас есть аккаунт?<span className='registration__to-login'>Войти</span></p>
    </Form>
  </div>
  )
}