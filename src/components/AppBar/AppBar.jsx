import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from '../AuthNav/AuthNav';
import useAuth from '../../hooks/useAuth';

export const AppBar = () => {
    const {isLoggedIn} = useAuth()

    return (
        <header>
            <Navigation/>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}

export default AppBar;
