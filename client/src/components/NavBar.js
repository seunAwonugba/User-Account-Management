import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-title">
                User Account Management
            </Link>

            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign up</Link>
                </li>
            </ul>
        </nav>
    );
}
