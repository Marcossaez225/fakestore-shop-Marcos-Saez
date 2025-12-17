import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn">
          Ver detalle
        </Link>
      </div>
    </div>
  )
}

export default ProductCard

