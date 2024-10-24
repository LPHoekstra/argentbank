import { Link } from "react-router-dom"
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import m from "./index.module.scss";

function Header() {
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
                <Link className={m.mainNav__item} to="/signin">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header