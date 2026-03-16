import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
  const newExpense = {
    id: Date.now(),
    name: expense.name,
    amount: Number(expense.amount)
  };

  setExpenses([...expenses, newExpense]);
};

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const loadSampleExpenses = () => {
    const samples = [
      { id: 1, name: "Food", amount: 5000 },
      { id: 2, name: "Transport", amount: 3000 },
      { id: 3, name: "Internet", amount: 4000 }
    ];

    setExpenses(samples);
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <button onClick={loadSampleExpenses}>
        Load Sample Expenses
      </button>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />

      <h2>Total: ₦{total}</h2>
    </div>
  );
}

export default App;