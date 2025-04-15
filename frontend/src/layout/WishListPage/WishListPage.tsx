import "./WishListPage.style.scss";
import icon from "@/assets/icon.svg"
import { Button } from "@/components/Button/Button";
import img from "@/assets/iphone.jpg";
import { WishCard } from "@/components/WishCard/WishCard";
import { Modal } from "@/components/Modal/Modal";
import { Input } from "@/components/Input/Input";
import { useState } from "react";

const wishes = [
    {
        title: 'Айфончик',
        comment: 'Красивенький',
        img: img,
        price: 5
    },
    {
        title: 'Дайсон',
        comment: 'Мощненький',
        img: img,
        price: 5
    },
    {
        title: 'Платешко',
        comment: '',
        img: img,
        price: 5
    },
    {
        title: 'Платешко',
        comment: '',
        img: img,
        price: 5
    },
    {
        title: 'Платешко',
        comment: '',
        img: img,
        price: 5
    },
    {
        title: 'Платешко',
        comment: '',
        img: img,
        price: 5
    },
]

interface WishListPageProps {
    title: string;
    comment?: string; 
  }

export const WishListPage: React.FC<WishListPageProps> = ({title, comment}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
    <>
    <div className="wishlist-page">
        <div className="wishlist-page__header">
            <div className="wishlist-page__info">
                <img src={icon} alt="" />
                <h1 className="wishlist-page__title">{title}</h1>
                <Button text="Публичный" img={icon} type="white" onClick={() => console.log("Кнопка нажата")}/>
            </div>
            <div className="wishlist-page__action">
                <Button text="Редактировать" img={icon} type="white" onClick={() => console.log("Кнопка нажата")}/>
                <Button text="Поделиться" img={icon} type="white" onClick={() => console.log("Кнопка нажата")}/>
            </div>
        </div>
        <div className="wishlist-page__main">
            <div className="wishlist-page__wish-info">
                <h2 className="wishlist-page__subtitle">Желания (7)</h2>
                <Button text="Добавить желание" img={icon} type="white" onClick={() => setIsModalOpen(true)}/>
            </div>
            <p className="wishlist-page__comment">{comment}</p>
        </div>
        <div className="wishlist-page__wishes">
                {wishes.length === 0 ? 
                    <div className="profile__no-wishlists">
                        <h2 className="profile__no-wishlists__title">У вас еще нет ни одного желания...</h2>
                        <Button onClick={() => console.log("Кнопка нажата")} text="Создать желание" type="white"/>
                    </div> 
                    : wishes.map(wishes => (
                    <WishCard 
                        title={wishes.title}
                        comment={wishes.comment}
                        img={wishes.img}
                        price={wishes.price}
                    />
                    ))
                }
            </div>

        
    </div>
        {isModalOpen && 
                <Modal title="Создание желания" closeModal={setIsModalOpen}>
                    <Input type="file" label="Фото"></Input>
                    <Input type="text" label="Название" placeholder="Введите название"/>
                    <Input type="text" label="Ссылка" placeholder="Вставьте ссылку на желание"/>
                    <div className="modal-price">
                        <Input type="text" label="Стоимость" placeholder="Введите цену"/>
                        <div className="modal-currency">
                            <label>Валюта</label>
                            <select className="modal-select">
                                <option>₽</option>
                                <option>$</option>
                                <option>€</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-block">
                        <label className="modal-description__label">Описание</label>
                        <textarea className="modal-description" placeholder="Введите описание вашего вишлиста (необязательно)"></textarea>
                    </div>
                    <div className="modal-private">
                        <label className="modal-private__label">Приватное желание
                            <p className="modal-private__subtitle">Пользователи не будут видеть это желание в вишлисте</p>
                        </label>
                        <input type="checkbox" className="modal-checkbox"/>
                    </div>
                </Modal>}
    </>
  );
};