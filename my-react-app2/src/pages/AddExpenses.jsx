import ExpenseForm from "../components/ExpenseForm"
import ExpenseList from "../components/ExpenseList"
import { Link } from "react-router-dom"

function AddExpense({ expenses, addExpense, deleteExpense, totalAmount }) {

  return (
    <div className="container">

      <h1>Add Expense</h1>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />

      <h3>Total: ₦{totalAmount}</h3>

    </div>
  )
}

export default AddExpense
