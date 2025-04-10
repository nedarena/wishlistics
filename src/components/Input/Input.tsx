import './Input.style.scss';

interface InputProps {
  label?: string,
  icon?: string,
  placeholder: string,
  type: string
}

export const Input : React.FC<InputProps> = ({ label, icon, placeholder, type }) => {
  return (
    <div className=''>
      {label && <label className='' htmlFor="">{label}</label>}
      <div className="">
        <input className='' type={type} placeholder={placeholder} />
        {icon && <img src={icon}></img>}
      </div>
    </div>
  )
}