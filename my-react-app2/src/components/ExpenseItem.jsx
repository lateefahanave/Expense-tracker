function ExpenseItem({ expense, deleteExpense }) {
  return (
    <li>
      {expense.name} - ₦{expense.amount.toLocaleString()} - {expense.date}
      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;
