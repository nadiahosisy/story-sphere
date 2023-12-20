import './style.css';
const Input = ({ name, inputName, value, type }) => {
  return (
    <div className="input-group">
      <label htmlFor={inputName}>{name}</label>
      <input type={type} name={inputName} value={value} />
    </div>
  );
};

export default Input;
