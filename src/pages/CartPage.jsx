import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartPage() {
  const { cart, removeFromCart, total } = useContext(CartContext)

  return (
    <div className="container">
      <h1>Carrito</h1>

      {cart.length === 0 && <p>Carrito vacío</p>}

      {cart.map((p, i) => (
        <div key={i} className="cart-item">
          <img src={p.image} alt={p.title} />
          <div>
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </div>
          <button
            className="btn-danger"
            onClick={() => removeFromCart(i)}
          >
            ✕
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h2 className="total">Total: ${total.toFixed(2)}</h2>
      )}
    </div>
  )
}

export default CartPage
