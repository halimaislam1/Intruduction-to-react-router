import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>

            <nav className="flex justify-center gap-3 font-bold text-xl my-5 ">
                <span>My Website</span>
                <Link to='/'>Home</Link>
                <Link to= '/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>contact us</Link>

            </nav>
        </div>
    );
};

export default Header;