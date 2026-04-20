import { useState } from "react";

function ExpenseForm({ addExpense }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  if (!name || !amount) return;

    addExpense({
      name: name,
      amount: amount,
      date: date
    });

    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
             e.preventDefault()
             document.getElementById("amountInput").focus()
    }
  }}
     />

     <input
       id="amountInput"
       type="number"
       placeholder="Amount"
       value={amount}
       onChange={(e) => setAmount(e.target.value)}
     />

     <input
       type="date"
       value={date}
       onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
        Add Expense
      </button>

    </form>
  );
}

export default ExpenseForm;
