import { useState } from "react"

function ExpenseForm({ onAddExpense }) {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")

  function handleSubmit() {

    if (!name || !amount) return

    onAddExpense({
      name,
      amount
    })

    setName("")
    setAmount("")
  }

  return (
    <div>

      <input
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add
      </button>

    </div>
  )

}

export default ExpenseForm