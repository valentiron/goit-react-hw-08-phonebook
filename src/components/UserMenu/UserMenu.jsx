import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import useAuth from 'hooks/useAuth';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.account}>
      <p className={css.welcome}>Welcome home, {user.name}</p>
      <button className={css.btn} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;