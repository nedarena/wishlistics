import "./Settings.style.scss";
import icon from "@/assets/icon.svg"
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

export const Settings = () => {
    return (
      <>
      <div className="settings">
        <div className="settings__header">
          <h1 className="settings__title">Настройки</h1>
          <img className="settings__logout" src={icon} alt="" />
        </div>
        <div className="settings__main">
          <div className="settings-profile">
            <h2 className="settings-profile__title">Профиль</h2>
            <Input type="file" label="Фото профиля"/>
            <div className="settings-profile__name">
              <Input type="text" label="Имя"/>
              <Input type="text" label="Фамилия"/>
            </div>
            <Input type="date" label="Дата рождения"/>
            <Input type="email" label="Email"/>
            <Button type="white" text="Сохранить" onClick={() => console.log("Кнопка нажата")} width="100%"/>
          </div>
          <div className="settings-security">
            <h2 className="settings-security__title">Безопасность</h2>
            <Input type="text" label="Старый пароль"/>
            <div className="settings-security__new-password">
              <Input type="text" label="Новый пароль"/>
              <Input type="text" label="Повторите пароль"/>
            </div>
            <Button type="white" text="Сменить пароль" onClick={() => console.log("Кнопка нажата")} width="100%"/>
            <div className="settings-security__show">
              <p className="settings-security__subtitle">Видимость новых вишлистов по умолчанию</p>
              <select className="settings-security__select">
                  <option>Публичный</option>
                  <option>Приватный</option>
              </select>
              <Button type="white" text="Сохранить приватность" onClick={() => console.log("Кнопка нажата")} width="100%"/>  
            </div>
            <div className="settings-security__delete">
              <p className="settings-security__subtitle">Удаление аккаунта</p>
              <Button type="white" text="Удалить аккаунт" onClick={() => console.log("Кнопка нажата")} width="100%"/>  
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };