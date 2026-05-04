import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import productsData from "./products.json"
import "./Activity3.css"

function Activity3() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setProducts(productsData)
    setLoading(false)
  }, [])

  if (loading) {
    return <h1 className="loading-text">Loading products...</h1>
  }

  return (
    <section className="product-page">
      <div className="product-header">
        <p className="product-label">Activity 3</p>
        <h1>Product Catalog</h1>

        <p className="product-subtitle">
          This program displays product data from a JSON file using React hooks,
          reusable components, and props.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Activity3