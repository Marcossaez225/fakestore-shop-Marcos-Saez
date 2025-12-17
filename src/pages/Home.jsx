import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className="container">
      <h1>Categorías</h1>
      <div className="grid">
        {categories.map(cat => (
          <Link key={cat} to={`/category/${cat}`} className="card">
            {cat}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
