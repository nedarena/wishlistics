import "./FormShell.scss";
import { ReactNode } from "react";

// Определяем интерфейс для пропсов
interface FormShellProps {
  children: ReactNode;
}

// Принимаем children как параметр
export const FormShell = ({ children }: FormShellProps) => {
  return (
    <form className="form">
      {children}
    </form>
  );
};
