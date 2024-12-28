import { useSelector } from "react-redux"
import m from "./index.module.scss"
import { useState } from "react"
import BankAccount from "../../components/BankAccount"
import EditUserNameForm from "../../containers/EditUserNameForm"

const bankAccoutData = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        amountDescription: "Available Balance"
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        amountDescription: "Available Balance"
    },
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$184.30",
        amountDescription: "Current Balance"
    }
]

function Profile() {
    const user = useSelector((state) => state.user)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    return (
        <main className="main bg-dark">
            <div className={m.header}>
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                {isFormOpen ? 
                    <EditUserNameForm setFormOpen={setIsFormOpen} setSuccessMsg={setSuccessMsg} />
                    :
                    <button 
                        className={`button ${m.editButton}`} 
                        onClick={() => {
                            setIsFormOpen(true) 
                            successMsg && setSuccessMsg(false)
                        }}>
                            Edit Name
                    </button>}
                {successMsg && <div>User profile updated</div>}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {bankAccoutData.map((account, index) => (
                <BankAccount
                    key={`${index}-${account.amount}`}
                    title={account.title}
                    amount={account.amount}
                    amountDescription={account.amountDescription} 
                />
            ))}
        </main>
    )
}

export default Profile