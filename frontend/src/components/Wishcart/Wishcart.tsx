import "./Wishcart.style.scss";
import { Button } from "../Button/Button";
import icon from "@/assets/icon.svg";

interface WishCardProps {
  title: string;
  price: number;
  comment?: string;
  img: string;
}

export const Wish: React.FC<WishCardProps> = ({
  title,
  price,
  comment,
  img,
}) => {
  return (
    // Refactor переделать классы по бэм
    <div className="wishcart">
      <img className="wishcart-img" src={img} alt="#" />
      <div className="wishcart__action">
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
      <div className="wishcart-info">
        <p className="wishcart-title">{title}</p>
        <p className="wishcart-price">{price} ₽</p>
        <p className="wishcart-comment">{comment || "Нет комментариев..."}</p>
      </div>
    </div>
  );
};
