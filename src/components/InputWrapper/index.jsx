import m from "./index.module.scss"
import PropTypes from "prop-types"

function InputWrapper({ type, onChange, placeholder }) {
    const inputs = {
        email: {
            label: "Email",
            type: "email",
            autoComplete: "email",
            id: "email"
        },
        password: {
            label: "Password",
            type: "password",
            autoComplete: "current-password",
            id: "password"
        },
        username: {
            label: "Username",
            type: "username",
            autoComplete: "username",
            id: "userName"
        },
    }

    const inputProps = inputs[type]

    return (
        <div className={m.inputWrapper}>
            <label htmlFor={inputProps.id}>{inputProps.label}</label>
            <input 
                type={inputProps.type} 
                id={inputProps.id} 
                autoComplete={inputProps.autoComplete}
                placeholder={placeholder || undefined}
                onChange={(event) => onChange(event.target.value)} 
            />
        </div>
    )
}

export default InputWrapper

InputWrapper.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}