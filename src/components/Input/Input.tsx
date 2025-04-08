import './Input.style.scss';

export const Input = ({ label, icon, placeholder, type }) => {
  return (
    <>
      <label htmlFor=""></label>
      <input type={type} placeholder={placeholder} />
    </>
  )
}