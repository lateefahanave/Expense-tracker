import "./App.css"
import { useState } from "react"
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AddExpense from "./pages/AddExpenses"
import SampleExpenses from "./pages/SampleExpenses"
import Navbar from "./components/NavBar"

function App() {

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses))
}, [expenses])

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      name: expense.name,
      amount: Number(expense.amount),
      date: expense.date
    }

    setExpenses([...expenses, newExpense])
  }
    
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  const totalAmount = expenses.reduce((total, expense) => {
  return total + Number(expense.amount)
}, 0)

  const loadSampleExpenses = () => {
  const samples = [
    { id: 1, name: "Food", amount: 5000 },
    { id: 2, name: "Transport", amount: 3000 },
    { id: 3, name: "Internet", amount: 4000 }
  ]
  setExpenses(samples)
}

const loadSavedExpenses = () => {
  setExpenses([])

  const saved = localStorage.getItem("expenses")
  if (saved) {
    setExpenses(JSON.parse(saved))
  }
}

  return (
    <>
    <Navbar/>
    
    <Routes>

      <Route path="/" element={<Home loadSavedExpenses={loadSavedExpenses} />} />

      <Route
  path="/add"
  element={
      <AddExpense
  expenses={expenses}
  addExpense={addExpense}
  deleteExpense={deleteExpense}
  totalAmount={totalAmount}
    />
  }
/>
      
      <Route
        path="/samples"
        element={
          <SampleExpenses
            expenses={expenses}
            deleteExpense={deleteExpense}
            loadSampleExpenses={loadSampleExpenses}
          />
        }
      />

    </Routes>
    </>
  )
}

export default App
