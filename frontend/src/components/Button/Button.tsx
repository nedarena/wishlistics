import './Button.style.scss';

interface ButtonProps {
  text?: string, 
  type: "black" | "white" | "img",
  img?: string,
  onClick: () => void,
  width?: string
}

export const Button : React.FC<ButtonProps> = ({ text, type, img, onClick, width }) => {
  // Refactor подумать как submit сделать
  return (
    <button style={{ width: `${width}` }} className={`button button_${type}`} onClick={onClick}>
      {text}
      {img && <img src={img} className='button__icon-img'/>}
    </button>
  )
}