import "./Profile.style.scss";
import { Button } from "@/components/Button/Button";
import icon from "@/assets/icon.svg"
import { WishList } from "@/components/WishList/WishList";
import img from "@/assets/iphone.jpg"
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { Input } from "@/components/Input/Input";

const wishlists = [
    {
        title: 'День рождения',
        comment: 'Что я хочу получить на др',
        img: img,
        sum: 5
    },
    {
        title: 'Yjdsq ujl',
        comment: 'Что я хочу получить на др',
        img: img,
        sum: 5
    },
    {
        title: 'День рождения',
        comment: 'Что я хочу получить на др',
        img: img,
        sum: 5
    },
    {
        title: 'День рождения',
        comment: 'Что я хочу получить на др',
        img: img,
        sum: 5
    },
    {
        title: 'День рождения',
        comment: 'Что я хочу получить на др',
        img: img,
        sum: 5
    },
]

export const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <div className="profile">
        <header className="profile-header">
            <img src="#" alt="" className="profile-header__avatar" />
            <div className="profile-header__text">
                <div className="profile-header__name">Даша Неустроева</div>
                <div className="profile-header__info">
                    <p className="profile-header__wish">3 вишлистов</p>
                    <p className="profile-header__wish">15 желаемых товаров</p>
                </div>
            </div>
            <Button type="white" text="Поделиться" onClick={() => console.log("Кнопка нажата")} img={icon}></Button>
        </header>
        <div className="profile-title">
            <h1 className="profile-title__text">Мои вишлисты</h1>
            <Button text="Создать вишлист" type="white" onClick={() => setIsModalOpen(true)}></Button>
        </div>
        <div className="profile-wishlists">
            {wishlists.length === 0 ? 
            <div className="profile__no-wishlists">
                <h2 className="profile__no-wishlists__title">Вы еще не создали ни одного вишлиста...</h2>
                <Button onClick={() => setIsModalOpen(true)} text="Создать вишлист" type="white"/>
            </div> 
            : wishlists.map(wishlist => (
                <WishList 
                    title={wishlist.title}
                    comment={wishlist.comment}
                    img={wishlist.img}
                    sum={wishlist.sum}
                />
            ))}
        </div>
    </div>

    {isModalOpen && 
    <Modal title="Создание вишлиста" closeModal={setIsModalOpen}>
        <Input type="text" label="Название" placeholder="Введите название вишлиста"/>
        <div className="modal-block">
            <label className="modal-description__label">Описание</label>
            <textarea className="modal-description" placeholder="Введите описание вашего вишлиста (необязательно)"></textarea>
        </div>
        <Input type="date" label="Дата события"></Input>
        <div className="modal-private">
            <label className="modal-private__label">Приватный вишлист
                <p className="modal-private__subtitle">Пользователи не будут видеть этот вишлист в общем списке</p>
            </label>
            <input type="checkbox" className="modal-checkbox"/>
        </div>
        
    </Modal>}
    </>
  );
};
