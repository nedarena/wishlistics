import "./Form.scss";
import { Btn } from "../Btn/Btn";
import {FormBlock} from "./FormBlock/FormBlock";
import { FormName } from "./FormName/FormName";
import { FormShell } from "./FormShell/FormShell";

export const FormInput = () => {
  return <div className="form-input">
    <h2>Вишлистикс</h2>
    <FormShell>
        <FormName
          text="Регистрация"
        />
        <FormBlock 
          label="Email" 
          type="email" 
        />
        <FormBlock 
          label="Пароль" 
          type="password" 
        />
        <Btn text="Войти"></Btn>
        <p>Нет аккаунта? <span>Зарегистрироваться</span></p>
      </FormShell>
  </div>
};