import { NavLink } from "react-router-dom";
import css from './HomeAuth.module.css'

const HomeAuth = () => {
return (
    <div className={css.nav}>
        <NavLink className={css.link} to='/register'>
            Register
        </NavLink>
        <NavLink className={css.link} to='/login'>
            Log In
        </NavLink>
    </div>
)
}

export default HomeAuth ;