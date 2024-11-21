import { useDispatch, useSelector } from "react-redux"
import userAPI from "../../api/userAPI"
import { setUser } from "../../redux/userSlice"
import FormHandler from "../../components/FormHandler"

function EditUserNameForm({ setFormOpen, setSuccessMsg }) {
    const currentUserName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    const handleSubmit = async (jsonData) => {
        const response = await userAPI.changeProfile(jsonData)

        dispatch(setUser(response.body))
        setFormOpen(false)
        setSuccessMsg(response.message)
    }

    return (
        <FormHandler
            field={[
                { type: "username", placeholder: currentUserName }
            ]}
            submit={handleSubmit}
            buttons={[
                { text: "Save" },
                { text: "Cancel", type: "button", onClick: () => setFormOpen(false) }
            ]}
        />
    )
}

export default EditUserNameForm