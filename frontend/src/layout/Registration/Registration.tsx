import "./Registration.style.scss";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useRef, useState } from "react";
import { useAuth } from "@/store/useAuth";

export const Registration = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const secondNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const registration = useAuth(state => state.registration);

  const handleRegistration = () => {
    const firstName = firstNameRef.current?.value;
    const secondName = secondNameRef.current?.value;

    if (email && password && firstName && secondName) {
      registration(`${firstName} ${secondName}`, email, password);
    }
  }

  return (
    <div className="registration">
      <h1 className="logo">Вишлистикс</h1>
      <Form>
        <div className="registration__header">
          <div className="registration__text">
            <h2 className="registration__title">Регистрация</h2>
            <p className="registration__subtitle">Создание аккаунта</p>
          </div>
          <p className="registration__step">Шаг {step} из 2</p>
        </div>
        {step === 1 && <>
          <Input ref={emailRef} label="Email" placeholder="example@example.com" type="text"/>
          <Input ref={passwordRef} label="Пароль" type="text"/>
          <Button
            text="Продолжить"
            type="black"
            onClick={() => {
              setEmail(emailRef.current?.value);
              setPassword(passwordRef.current?.value);
              setStep(2);
            }}
          />
        </>}
        {step === 2 && <>
          <div className="registration__input-block">
            <Input ref={firstNameRef} label="Имя" placeholder="Иван" type="text"/>
            <Input ref={secondNameRef} label="Фамилия" placeholder="Иванов" type="text"/>
          </div>
          <Input label="Дата рождения" placeholder="" type="date"/>
          <div className="registration__button-block">
            <Button
              text="назад"
              type="white"
              onClick={() => setStep(1)}
            />
            <Button
              text="Зарегистрироваться"
              type="black"
              onClick={handleRegistration}
            />
          </div>
        </>}

        <p className="registration__question">
          У вас есть аккаунт?
          <span className="registration__to-login">Войти</span>
        </p>
      </Form>
    </div>
  );
};
