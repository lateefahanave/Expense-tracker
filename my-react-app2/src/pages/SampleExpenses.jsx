import ExpenseList from "../components/ExpenseList"
import { Link } from "react-router-dom"

function SampleExpenses({ deleteExpense }) {

  const samples = [
    { id: 1, name: "Food", amount: 5000 },
    { id: 2, name: "Transport", amount: 3000 },
    { id: 3, name: "Internet", amount: 4000 }
  ]

  return (
    <div className="container">

      <h1>Sample Expenses</h1>

      <ExpenseList
        expenses={samples}
        deleteExpense={deleteExpense}
      />

    </div>
  )
}

export default SampleExpenses

