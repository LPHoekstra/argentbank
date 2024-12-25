import m from "./index.module.scss"
import PropTypes from "prop-types"

function InputWrapper({ type, onChange, placeholder, disabled }) {
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
            label: "User name",
            type: "username",
            autoComplete: "username",
            id: "userName"
        },
        firstname: {
            label: "First name",
            type: "firstname",
            autoComplete: "given-name",
            id: "firstName"
        },
        lastname: {
            label: "Last name",
            type: "lastname",
            autoComplete: "family-name",
            id: "lastName"
        }
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
                onChange={(event) => onChange(event.target)}
                disabled={disabled}
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