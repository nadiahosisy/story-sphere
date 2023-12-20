import Input from './Input';
import './style.css';
const Login = () => {
  const fields = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'enter email please!',
      labelName: 'Email',
      htmlFor: 'email',
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'enter password please!',
      labelName: 'Password',
      htmlFor: 'password',
    },
  ];
  return (
    <div className="flex-container">
      <div className="form-container">
        <h2>Login:</h2>
        <form className="login-form">
          {fields.slice().map((field) => (
            <Input key={field.id} {...field} />
          ))}
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
