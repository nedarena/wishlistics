import "./AllWishes.style.scss"
import { WishCard } from "@/components/WishCard/WishCard";
import img from "@/assets/iphone.jpg"
import { Button } from "@/components/Button/Button";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { Input } from "@/components/Input/Input";

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
]

export const AllWishes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <div className="all-wishes">
        <h1 className="all-wishes__title">Все желания</h1>
        <div className="all-wishes__nav">
            <input className="all-wishes__search" type="search" name="" id="" placeholder="Найти желание..."/>
            <select className="all-wishes__select">
                <option>Фильтры</option>
                <option>Цена</option>
                <option>Видимость</option>
                <option>Название</option>
                <option>Дата</option>
            </select>
        </div>
        <div className="all-wishes__wishes">
            {wishes.length === 0 ? 
                <div className="profile__no-wishlists">
                    <h2 className="profile__no-wishlists__title">У вас еще нет ни одного желания...</h2>
                    <Button onClick={() => setIsModalOpen(true)} text="Создать желание" type="white"/>
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