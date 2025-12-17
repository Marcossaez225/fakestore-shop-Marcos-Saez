import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Category() {
  const { name } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [name])

  return (
    <div className="container">
      <h1>{name}</h1>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Category
