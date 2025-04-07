import "./FormInput.scss";
import { Btn } from "../Btn/Btn";

export const FormInput = () => {
  return <>
    <h2>Вишлистикс</h2>
    <div className="block-form">
        <p className="name-form">Авторизация</p>
        <form>
        <label>Email</label>
        <input type="email" name="" id="" />
        <label>Пароль</label>
        <input type="password" name="" id="" />
        </form>
        <Btn text="Войти"></Btn>
    </div>

  </>;
};