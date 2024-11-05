import { Link } from "react-router-dom"
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import m from "./index.module.scss";
import { useSelector } from "react-redux";
import HeaderLogStatus from "../../components/HeaderLogStatus"

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
                {isConnected ?
                    <HeaderLogStatus link="/logout" content="Logout"/>
                    :
                    <HeaderLogStatus link="/signin" content="Sign In"/>
                }
            </div>
        </nav>
    )
}

export default Header