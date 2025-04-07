import "./FormName.scss";

// Определяем один интерфейс для всех пропсов
interface FormNameProps {
  text: string;
  subtitle?: string; // Добавил ? чтобы сделать этот проп опциональным
}

// Принимаем все пропсы в одном объекте
export const FormName = ({ text, subtitle }: FormNameProps) => {
  return (
    <div className="title-form">
      <p className="name-form">{text}</p> 
      {subtitle && <p className="subtitle-form">{subtitle}</p>}
    </div>
  );
};