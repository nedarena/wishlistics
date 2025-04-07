import "./Btn.scss";

export const Btn = ({ text }: { text: string }) => {
  return <>
  <button className="btn">{text}</button>
  </>;
};