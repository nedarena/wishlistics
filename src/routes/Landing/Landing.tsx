import './Landing.style.scss';
import { Link } from 'react-router';

export const Landing = () => {
  return (
    <>
      Landing

      <button><Link to={'/auth/login'}>Войти</Link></button>
      <button><Link to={'/auth/registration'}>Зарегистрироваться</Link></button>
    </>
  )
}