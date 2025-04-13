import './Input.style.scss';

interface InputProps {
  label?: string,
  icon?: string,
  placeholder: string,
  type: string
}

export const Input : React.FC<InputProps> = ({ label, icon, placeholder, type }) => {
  return (
    <div className='input'>
      {label && <label className='input__label' htmlFor="">{label}</label>}
      <div className="input__block">
        <input className='input__enter' type={type} placeholder={placeholder} />
        {icon && <img src={icon} className='input__icon'></img>}
        </div>
    </div>
  )
}