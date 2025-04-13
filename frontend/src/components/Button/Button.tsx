import './Button.style.scss';

interface ButtonProps {
  text?: string, 
  type: "black" | "white" | "img",
  img?: string,
  onClick: () => void
}

export const Button : React.FC<ButtonProps> = ({ text, type, img, onClick }) => {
  return (
    <button className={`button button_${type}`} onClick={onClick}>
      {text}
      {img && <img src={img} className='button__icon-img'/>}
    </button>
  )
}