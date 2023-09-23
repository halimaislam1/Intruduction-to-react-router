import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>

            <nav className="flex justify-center gap-3 font-bold 
            text-xl my-5 ">
                <span>My Website</span>
                <Link to='/'>Home</Link>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to = '/posts'>Posts</NavLink>
                <Link to='/about'>About</Link>
                <Link to='/contact'>contact us</Link>

            </nav>
        </div>
    );
};

export default Header;