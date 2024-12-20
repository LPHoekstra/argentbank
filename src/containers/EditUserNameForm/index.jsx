import { useDispatch, useSelector } from "react-redux"
import userAPI from "../../api/userAPI"
import { setUser } from "../../redux/userSlice"
import FormHandler from "../../components/FormHandler"
import m from "./index.module.scss"

function EditUserNameForm({ setFormOpen, setSuccessMsg }) {
    const currentUserName = useSelector((state) => state.user.userName)
    const currentFirstName = useSelector((state) => state.user.firstName)
    const currentLastName = useSelector((state) => state.user.lastName)
    const dispatch = useDispatch()

    const handleSubmit = async (data) => {   
        const userName = {"userName": data.userName}
        const userNameJson = JSON.stringify(userName)
        
        const response = await userAPI.changeProfile(userNameJson)

        dispatch(setUser(response.body))
        setFormOpen(false)
        setSuccessMsg(response.message)
    }

    return (
        <FormHandler
            field={[
                { type: "username", placeholder: currentUserName },
                { type: "firstname", placeholder: currentFirstName, disabled: true },
                { type: "lastname", placeholder: currentLastName, disabled: true }
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