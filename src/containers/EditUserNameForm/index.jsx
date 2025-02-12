import { useDispatch, useSelector } from "react-redux"
import userAPI from "../../api/userAPI"
import { setUserName } from "../../redux/userSlice"
import FormHandler from "../../components/FormHandler"
import m from "./index.module.scss"
import { removeError } from "../../redux/errorSlice"

function EditUserNameForm({ setFormOpen, setSuccessMsg }) {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleSubmit = async (data) => {   
        if (!data.userName) {
            throw new Error("Username is required")
        }

        const userName = {"userName": data.userName}
        const userNameJson = JSON.stringify(userName)
        
        const response = await userAPI.changeProfile(userNameJson)

        dispatch(setUserName(response.body))
        dispatch(removeError())
        setFormOpen(false)
        setSuccessMsg(true)
    }

    return (
        <FormHandler
            field={[
                { type: "username", placeholder: user.userName },
                { type: "firstname", placeholder: user.firstName, disabled: true },
                { type: "lastname", placeholder: user.lastName, disabled: true }
            ]}
            submit={handleSubmit}
            buttons={[
                { text: "Save" },
                { text: "Cancel", type: "button", onClick: () => setFormOpen(false) }
            ]}
            additionalClass={
                {
                    form: m.form,
                    btnWrapper: m.form__btnWrapper
                }
            }
        />
    )
}

export default EditUserNameForm