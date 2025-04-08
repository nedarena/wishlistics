import "./Btn.scss";

interface ButtonProps {
  text: string,
}

export const Btn : React.FC<ButtonProps> = ({text}) => {
  return <>
  <button>{text}</button>
  </>;
};