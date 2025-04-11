import './Button.style.scss';

interface ButtonProps {
  text?: string, 
  type: "black" | "white" | "img",
  img?: string
}

export const Button : React.FC<ButtonProps> = ({ text, type, img }) => {
  return (
    <button className={`button button_${type}`}>
      {text}
      {img && <img src={img} className='button-icon-img'/>}
    </button>
  )
}