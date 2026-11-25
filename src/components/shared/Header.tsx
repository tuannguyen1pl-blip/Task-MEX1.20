import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return(
        <header className="header">
            <div className="header-logo">
                Mini LMS
            </div>
            <nav className="header-nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/courses">Course</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="dashboard">Dashboard</NavLink>
            </nav>
        </header>
    );
}
export default Header;