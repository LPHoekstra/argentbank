import { Link } from "react-router-dom"
import argentBankLogo from "../../assets/img/argentBankLogo-opti.png"
import m from "./index.module.scss";
import { useSelector } from "react-redux";

function Header() {
    const isConnected = useSelector((state) => state.auth.isConnected)

    return (
        <nav className={m.mainNav}>
            <Link className={m.mainNav__logo} to="/">
                <img
                    className={m.mainNav__img}
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {!isConnected || <Link className={m.mainNav__item} to="/profile">Profile</Link>}
                <Link className={m.mainNav__item} to={isConnected ? "/logout" : "/login"}>
                    <i className="fa fa-user-circle"></i>
                    {isConnected ? "Logout" : "Sign In"}
                </Link>
            </div>
        </nav>
    )
}

export default Header