import { useState } from "react"
import InputWrapper from "../../components/InputWrapper"
import m from "./index.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { loading, notLoading } from "../../redux/loadersSlice"
import userAPI from "../../api/userAPI"
import { setError } from "../../redux/errorSlice"
import { setUser } from "../../redux/userSlice"

function EditUserNameForm({ setFormOpen, setSuccessMsg }) {
    const [userName, setUserName] = useState(null)
    const error = useSelector((state) => state.error.errorMsg)
    const currentUserName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        try {
        event.preventDefault()
        dispatch(loading())

        const formObject = {
            "userName": userName
        }

        const jsonData = JSON.stringify(formObject)

        const response = await userAPI.changeProfile(jsonData)
        
        dispatch(setUser(response.body))
        dispatch(notLoading())
        setFormOpen(false)
        setSuccessMsg(response.message)
        } catch (error) {
            console.error(error)
            dispatch(notLoading())

            dispatch(setError(error.message))
        }
    }

    return (
        <form className={m.form} onSubmit={(event) => handleSubmit(event)}>
            <InputWrapper 
                type="username"
                id="userName"
                onChange={setUserName}
                autocomplete="none"
                text="Username"
                placeholder={currentUserName}
            />
            <div className={m.form__btnWrapper}>
                <button className="button">Save</button>
                <button className="button" type="button" onClick={() => setFormOpen(false)}>Cancel</button>
            </div>
            {error ? 
            <span className="error-msg">{error}</span>
            :
            null}
        </form>
    )
}

export default EditUserNameForm