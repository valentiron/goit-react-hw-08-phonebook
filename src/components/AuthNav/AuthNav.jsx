import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <div>
        <NavLink to="/register">Register</NavLink>
      </div>
      <div>
        <NavLink to="/login">Log In</NavLink>
      </div>
    </div>
  );
};

export default AuthNav;