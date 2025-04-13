import './Input.style.scss';

interface InputProps {
  label?: string,
  icon?: string,
  placeholder?: string,
  type: string,
  ref?: React.Ref<HTMLInputElement> | null
}

export const Input : React.FC<InputProps> = ({ label, icon, placeholder, type, ref }) => {
  return (
    <div className='input'>
      {label && <label className='input__label' htmlFor="">{label}</label>}
      <div className="input__block">
        <input ref={ref} className='input__enter' type={type} placeholder={placeholder} />
        {icon && <img src={icon} className='input__icon'></img>}
      </div>
    </div>
  )
}