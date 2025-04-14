import { ReactNode } from "react";
import "./Modal.style.scss";
import { Button } from "../Button/Button";

interface ModalProps {
    children: ReactNode,
    title: string,
    closeModal: (value: boolean) => void
}

export const Modal: React.FC<ModalProps> = ({children, title, closeModal}) => {
  return (
    <div className="modal-bg" onClick={() => closeModal(false)}> 
    <div className="modal" onClick={e => e.stopPropagation()}>
        <h1 className="modal__title">{title}</h1>
        {children}
        <div className="modal-btn">
            <Button text="Отмена" type="white" onClick={() => closeModal(false)} width="100%"/>
            <Button text="Создать" type="black" onClick={() => console.log("Кнопка нажата")} width="100%"/>
        </div>
    </div>
    </div>
  );
};