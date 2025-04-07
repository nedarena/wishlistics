import "./FormStep.scss";

export const FormStep = ({step} : {step : string}) => {
  return <p className="form-step">Шаг {step} из 2</p>
};