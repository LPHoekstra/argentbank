import m from "./index.module.scss"

function InputWrapper({ type, id, onChange, autocomplete, text }) {

    return (
        <div className={m.inputWrapper}>
            <label htmlFor={id}>{text}</label>
            <input type={type} id={id} autoComplete={autocomplete} onChange={(event) => onChange(event.target.value)} />
        </div>
    )
}

export default InputWrapper