import { Link } from "react-router-dom"
import m from "../../containers/Header/index.module.scss"

function HeaderLogStatus({ link, content }) {

    return (
        <Link className={m.mainNav__item} to={link}>
            <i className="fa fa-user-circle"></i>
            {content}
        </Link>
    )
}

export default HeaderLogStatus