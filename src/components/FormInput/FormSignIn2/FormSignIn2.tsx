import "./FormSignIn2.scss";
import { Btn } from "@/components/Btn/Btn";
import { FormBlock } from "../FormBlock/FormBlock";
import { FormName } from "../FormName/FormName";
import { FormShell } from "../FormShell/FormShell";
import { FormStep } from "../FormStep/FormStep";
import { BtnLight } from "@/components/BtnLight/BtnLight";

export const FormSignIn2 = () => {
  return <div className="form-input">
    <h2>Вишлистикс</h2>
    <FormShell>
      <div className="formshell-header">
        <FormName
          text="Регистрация"
          subtitle="Создание аккаунта"
        />
        <FormStep 
        step="2">
        </FormStep>
      </div>
        <div className="row2">
          <FormBlock 
            label="Имя" 
            type="text" 
          />
          <FormBlock 
            label="Фамилия" 
            type="text" 
          />
        </div>
        
        <FormBlock 
          label="Дата рождения" 
          type="date" 
        />
        <BtnLight text="Назад"></BtnLight>
      
        <Btn text="Продолжить"></Btn>
        <p>У вас есть аккаунт? <span>Войти</span></p>
      </FormShell>
  </div>
};