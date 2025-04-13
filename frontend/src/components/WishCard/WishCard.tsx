import "./WishCard.style.scss";
import { Button } from "../Button/Button";
import icon from "@/assets/icon.svg";

interface WishCardProps {
  title: string;
  price: number;
  comment?: string;
  img: string;
}

export const WishCard: React.FC<WishCardProps> = ({
  title,
  price,
  comment,
  img,
}) => {
  return (
    // Refactor переделать классы по бэм
    <div className="wish-card">
      <img className="wish-card__img" src={img} alt="#" />
      <div className="wish-card__action">
        {/* Refactor сделать onClick */}
        <Button
          onClick={() => console.log("Кнопка нажата")}
          img={icon}
          type="img"
        ></Button>
        <Button
          onClick={() => console.log("Кнопка нажата")}
          img={icon}
          type="img"
        ></Button>
        <Button
          onClick={() => console.log("Кнопка нажата")}
          img={icon}
          type="img"
        ></Button>
      </div>
      <div className="wish-card__info">
        <p className="wish-card__title">{title}</p>
        <p className="wish-card__price">{price} ₽</p>
        <p className="wish-card__comment">{comment || "Нет комментариев..."}</p>
      </div>
    </div>
  );
};
