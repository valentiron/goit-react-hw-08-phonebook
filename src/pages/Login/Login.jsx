import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};
export default Login;