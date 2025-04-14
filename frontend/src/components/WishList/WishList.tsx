import "./WishList.style.scss";
import { Button } from "../Button/Button";
import icon from "@/assets/icon.svg";

interface WishListProps {
  title: string;
  sum: number;
  comment?: string;
  img: string;
}

export const WishList: React.FC<WishListProps> = ({
  title,
  sum, 
  comment,
  img,
}) => {
  return (
    <div className="wish-list">
      <img className="wish-list__img" src={img} alt="#" />
      <div className="wish-list__action">
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
      <div className="wish-list__info">
        <div className="wish-list__text">
          <p className="wish-list__title">{title}</p>
          <p className="wish-list__comment">{comment || "Нет комментариев..."}</p>
        </div>
        
        <span className="wish-list__sum">{`${sum} желаний`}</span>

        <Button  text="Открыть вишлист" onClick={() => console.log("Кнопка нажата")} type="white" />
      </div>
      
    </div>
  );
};
