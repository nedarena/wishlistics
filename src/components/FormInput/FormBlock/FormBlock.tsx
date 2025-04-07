import "./FormBlock.scss";

interface FormBlockProps {
    label: string;
    type: string;
  }

  export const FormBlock: React.FC<FormBlockProps> = ({ label, type }) => {
  return <div className="block-form">
          <label>{label}</label>
          <input type={type} name="" id="" />
  </div>
};
