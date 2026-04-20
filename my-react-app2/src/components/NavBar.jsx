import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Expense</Link>
      <Link to="/samples">Samples</Link>
    </nav>
  )
}

export default Navbar
