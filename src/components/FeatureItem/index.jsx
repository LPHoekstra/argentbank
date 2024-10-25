import m from "./index.module.scss"
import PropTypes from "prop-types"

function FeatureItem({ title, icon, iconAlt, content }) {

    return (
        <div className={m.features__item}>
            <img src={icon} alt={iconAlt} className={m.features__icon} />
            <h3 className={m.features__itemTitle}>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

FeatureItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default FeatureItem