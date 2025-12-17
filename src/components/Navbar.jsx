import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  const { count } = useContext(CartContext)

  return (
    <nav className="navbar">
      <Link to="/" className="logo">FakeStore</Link>

      <div className="nav-actions">
        <ThemeToggle />

        <Link to="/cart" className="cart-link">
          🛒
          {count > 0 && <span className="cart-badge">{count}</span>}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

