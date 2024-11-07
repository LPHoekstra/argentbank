import { useSelector } from "react-redux"
import m from "./index.module.scss"
import { useState } from "react"
import EditNameForm from "../../components/EditNameForm"
import BankAccount from "../../components/BankAccount"

function Profile() {
    const user = useSelector((state) => state.user)
    const [formOpen, setFormOpen] = useState(false)

    return (
        <main className="main bg-dark">
            <div className={m.header}>
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                <button className={`button ${m.editButton}`} onClick={() => setFormOpen(true)}>Edit Name</button>
                {formOpen ? <EditNameForm setFormOpen={setFormOpen} /> : null}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <BankAccount
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                amountDescription="Available Balance" />
            <BankAccount
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                amountDescription="Available Balance" />
            <BankAccount
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                amountDescription="Current Balance" />
        </main>
    )
}

export default Profile