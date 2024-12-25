import { Link } from "react-router-dom"
import argentBankLogo from "../../assets/img/argentBankLogo-opti.png"
import m from "./index.module.scss";
import { useSelector } from "react-redux";

function Header() {
    const isConnected = useSelector((state) => state.auth.isConnected)
    const username = localStorage.getItem("userName")

    return (
        <nav className={m.mainNav}>
            <Link className={m.mainNav__logo} to="/">
                <img
                    className={m.mainNav__logoImg}
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className={m.mainNav__linkContainers}>
                {isConnected &&
                    <Link className={m.mainNav__item} to="/profile">
                        <i className="fa fa-user-circle"></i>
                        {username ? username : "Profile"}
                    </Link>
                }
                <Link className={m.mainNav__item} to={isConnected ? "/logout" : "/login"}>
                    {isConnected ? "Logout" : "Sign In"}
                </Link>
            </div>
        </nav>
    )
}

export default Header