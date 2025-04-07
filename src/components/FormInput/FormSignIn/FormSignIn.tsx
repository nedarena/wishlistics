import "./FormSignIn.scss";
import { Btn } from "@/components/Btn/Btn";
import { FormBlock } from "../FormBlock/FormBlock";
import { FormName } from "../FormName/FormName";
import { FormShell } from "../FormShell/FormShell";
import { FormStep } from "../FormStep/FormStep";

export const FormSignIn = () => {
  return <div className="form-input">
    <h2>Вишлистикс</h2>
    <FormShell>
      <div className="formshell-header">
        <FormName
          text="Регистрация"
          subtitle="Создание аккаунта"
        />
        <FormStep 
        step="1">

        </FormStep>
      </div>
        
        <FormBlock 
          label="Email" 
          type="email" 
        />
        <FormBlock 
          label="Пароль" 
          type="password" 
        />
        <Btn text="Продолжить"></Btn>
        <p>У вас есть аккаунт? <span>Войти</span></p>
      </FormShell>
  </div>
};