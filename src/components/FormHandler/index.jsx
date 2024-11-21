import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loading, notLoading } from "../../redux/loadersSlice";
import { setError } from "../../redux/errorSlice";
import InputWrapper from "../InputWrapper";
import m from "./index.module.scss";

function FormHandler({ field, buttons, submit, additionalContent }) {
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
        <form onSubmit={(event) => handleSubmit(event)}>
            {field.map(({ type, placeholder }) => (
                <InputWrapper 
                    key={type} 
                    type={type} 
                    onChange={(input) => handleChange(input)}
                    placeholder={placeholder}
                />
            ))}
            {additionalContent && additionalContent}
            <div className={m.form__btnWrapper}>
                {buttons.map(({ type, text, onClick}) => (
                    <button
                        key={text}
                        type={type || "submit"}
                        className="button"
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