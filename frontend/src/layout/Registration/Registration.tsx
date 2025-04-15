import "./Registration.style.scss";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useState } from "react";
import { useAuth } from "@/store/useAuth";
import { RegistrationData } from "@/types/user.types";

export const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
  });

  const registration = useAuth(state => state.registration);

  const handleChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (formData.email && formData.password) {
      setStep(2);
    }
  };

  const handleRegistration = () => {
    const { email, password, firstName, lastName, birthDate } = formData;
    if (email && password && firstName && lastName && birthDate) {
      registration(formData);
    }
  };

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

        {step === 1 && (
          <>
            <Input
              label="Email"
              placeholder="example@example.com"
              type="text"
              value={formData.email}
              onChange={e => handleChange("email", e.target.value)}
            />
            <Input
              label="Пароль"
              type="password"
              value={formData.password}
              onChange={e => handleChange("password", e.target.value)}
            />
            <Button text="Продолжить" type="black" onClick={handleContinue} />
          </>
        )}

        {step === 2 && (
          <>
            <div className="registration__input-block">
              <Input
                label="Имя"
                placeholder="Иван"
                type="text"
                value={formData.firstName}
                onChange={e => handleChange("firstName", e.target.value)}
              />
              <Input
                label="Фамилия"
                placeholder="Иванов"
                type="text"
                value={formData.lastName}
                onChange={e => handleChange("lastName", e.target.value)}
              />
            </div>
            <Input
              label="Дата рождения"
              type="date"
              value={formData.birthDate}
              onChange={e => handleChange("birthDate", e.target.value)}
            />
            <div className="registration__button-block">
              <Button text="назад" type="white" onClick={() => setStep(1)} />
              <Button text="Зарегистрироваться" type="black" onClick={handleRegistration} />
            </div>
          </>
        )}

        <p className="registration__question">
          У вас есть аккаунт?
          <span className="registration__to-login">Войти</span>
        </p>
      </Form>
    </div>
  );
};