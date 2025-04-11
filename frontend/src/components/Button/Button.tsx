import './Button.style.scss';

interface ButtonProps {
  text: string, 
  type: "black" | "white"
}

export const Button : React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <button className={`button_${type}`}>
      {text}
    </button>
  )
}