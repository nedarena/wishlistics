import './Form.style.scss';

export const Form = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="form">
      {children}
    </div>
  )
}