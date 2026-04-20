import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {

  if (expenses.length === 0){
    return <p>No expenses yet</p>
  }
  
  return (
    <ul>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
