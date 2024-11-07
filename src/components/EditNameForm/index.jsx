import { useState } from "react"
import InputWrapper from "../InputWrapper"
import m from "./index.module.scss"

function EditNameForm({ setFormOpen }) {
    const [userName, setUserName] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userName)
    }

    return (
        <form className={m.form} onSubmit={(event) => handleSubmit(event)}>
            <InputWrapper 
                type="username"
                id="userName"
                onChange={setUserName}
                autocomplete="none"
                text="Username"
            />
            <div className={m.form__btnWrapper}>
                <button className="button">Save</button>
                <button className="button" type="button" onClick={() => setFormOpen(false)}>Cancel</button>
            </div>
        </form>
    )
}

export default EditNameForm