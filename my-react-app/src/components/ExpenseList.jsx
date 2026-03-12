import ExpenseItem from "./ExpenseItem"

function ExpenseList({ expenses }) {

  return (
    <ul>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          name={expense.name}
          amount={expense.amount}
        />
      ))}
    </ul>
  )

}

export default ExpenseList