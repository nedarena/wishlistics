import './Wishcart.style.scss';
import { Button } from '../Button/Button';
import icon from "@/assets/icon.svg"

interface WishProps {
  title: string,
  price: string,
  comment?: string,
  img: string
}

export const Wish : React.FC<WishProps> = ({ title, price, comment, img }) => {
  return (
    <div className="wishcart">
        <img className='wishcart-img' src={img} alt="#" />
        <div className="wishcart__action">
            <Button img={icon} type="img"></Button>
            <Button img={icon} type="img"></Button>
            <Button img={icon} type="img"></Button>
        </div>
        <div className="wishcart-info">
            <p className='wishcart-title'>{title}</p>
            <p className='wishcart-price'>{price} ₽</p>
            <p className='wishcart-comment'>{comment || "Нет комментариев..."}</p>
        </div>
        
    </div>
  )
}