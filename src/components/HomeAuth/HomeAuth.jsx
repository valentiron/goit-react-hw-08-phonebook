import { NavLink } from "react-router-dom";

const HomeAuth = () => {
return (
    <div>
        <NavLink to='/register'>
            Register
        </NavLink>
        <NavLink to='/login'>
            Log In
        </NavLink>
    </div>
)
}

export default HomeAuth ;