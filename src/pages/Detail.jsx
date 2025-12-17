import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import Toast from "../components/Toast"

function Detail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useContext(CartContext)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  const handleAdd = () => {
    addToCart(product)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }  

  if (!product) return <p>Cargando...</p>

  return (
    <>
      <Toast show={showToast} message="Producto agregado al carrito" />

      <div className="detail-page">
        <img src={product.image} alt={product.title} />

        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <h3 className="price">${product.price}</h3>

          <button className="btn-primary" onClick={handleAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  )
}

export default Detail

