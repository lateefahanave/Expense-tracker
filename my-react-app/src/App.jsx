import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"

function App() {

  const [expenses, setExpenses] = useState([])

  function addExpense(expense) {
    setExpenses([...expenses, expense])
  }

  return (
    <div>

      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseList expenses={expenses} />

    </div>
  )

}

export default App