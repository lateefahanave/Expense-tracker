function ExpenseItem({ name, amount }) {
  return (
    <li>
      {name} — ₦{amount}
    </li>
  )
}

export default ExpenseItem