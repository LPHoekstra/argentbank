import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loading, notLoading } from "../../redux/loadersSlice";
import { setError } from "../../redux/errorSlice";
import InputWrapper from "../InputWrapper";
import m from "./index.module.scss";
import PropTypes from "prop-types";


/**
 * 
 * @param {Object} props - Properties passed to the component.
 * @param {Array} props.field - Array of objects representing the form fields.
 *    Each object should include:
 *      - {string} type - The type of the HTML input (e.g., "text", "email", "password").
 *      - {string} placeholder OPTIONAL - The placeholder text for the input.
 * @param {Array} props.buttons - Array of objects representing the form buttons.
 *    Each object can include:
 *      - {string} OPTIONAL - The type of the button ("submit" or "button").
 *      - {string} - The text displayed on the button.
 *      - {function} [onClick] OPTIONAL - Callback function for button click events.
 * @param {function} props.submit - Function called when the form is submitted.
 *    - Receives one argument: the form data in JSON format.
 * @param {ReactNode|string} [props.additionalContent] OPTIONAL - Additional content to display alongside the form, such as a message or instructions.
 * @param {Object} [props.additionalClass] OPTIONAL - Object to define additional CSS classes for custom styling.
 *    - {string} [additionalClass.form] - Class for the main form container.
 *    - {string} [additionalClass.btnWrapper] - Class for the button wrapper.
 *    - {string} [additionalClass.button] - Class for individual buttons.
 * 
 * @returns {JSX.Element} A configurable and functional form.
 */
function FormHandler({ field, buttons, submit, additionalContent, additionalClass }) {
    const [formData, setFormData] = useState({})
    const error = useSelector((state) => state.error.errorMsg)
    const dispatch = useDispatch()

    const handleChange = (input) => {
        const field = input.id
        const value = input.value
        setFormData((prev) => ({ ...prev, [field]: value }));
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            dispatch(loading())

            const jsonData = JSON.stringify(formData)
            await submit(jsonData)
        } catch (error) {
            console.error(error)
            dispatch(setError(error.message))
        } finally {
            dispatch(notLoading())
        }
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} 
            className={additionalClass.form}
        >
            {field.map(({ type, placeholder }) => (
                <InputWrapper 
                    key={type} 
                    type={type} 
                    onChange={(input) => handleChange(input)}
                    placeholder={placeholder}
                />
            ))}
            {additionalContent && additionalContent}
            <div className={`${m.form__btnWrapper} ${additionalClass.btnWrapper}`}>
                {buttons.map(({ type, text, onClick}) => (
                    <button
                        key={text}
                        type={type || "submit"}
                        className={`button ${additionalClass.button}`}
                        onClick={onClick}
                    >
                        {text}
                    </button>
                ))}
            </div>
            {error && <span className="error-msg">{error}</span>}
        </form>
    )
}

export default FormHandler

FormHandler.propTypes = {
    field: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            placeholder: PropTypes.string
        })
    ).isRequired,

    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func
        })
    ).isRequired,

    submit: PropTypes.func.isRequired,

    additionalContent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),

    additionalClass: PropTypes.shape({
        form: PropTypes.string,
        btnWrapper: PropTypes.string,
        button: PropTypes.string
    })
};