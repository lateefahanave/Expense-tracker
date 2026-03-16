function ExpenseItem({ expense, deleteExpense }) {
  return (
    <li>
      {expense.name} - ₦{expense.amount}
      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;