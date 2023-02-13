import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      {isLoggedIn && (
        <div>
          <NavLink to="/contacts">Contacts'</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;