import { Link, useNavigate } from "react-router-dom"

function Home({ loadSavedExpenses }) {

  const navigate = useNavigate()

  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <Link to="/add">
        <button>Add Expense</button>
      </Link>

      <Link to="/samples">
        <button>Load Sample Expenses</button>
      </Link>

      <button 
        onClick={() => {
          loadSavedExpenses()
          navigate("/add") 
        }}>
        Load Saved Expenses
      </button>

    </div>
  )
}

export default Home
