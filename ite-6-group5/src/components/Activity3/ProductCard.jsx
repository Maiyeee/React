import Badge from "./Badge"
import StarRating from "./StarRating"

function ProductCard({ product }) {
  const { name, category, price, rating, inStock, description } = product

  return (
    <article className="product-card">
      <div className="product-top">
        <h2>{name}</h2>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>

      <div className="product-badges">
        <Badge label={category} type="category" />

        <Badge
          label={inStock ? "In Stock" : "Out of Stock"}
          type={inStock ? "available" : "unavailable"}
        />
      </div>

      <p className="product-description">{description}</p>

      <div className="product-footer">
        <StarRating rating={rating} />
      </div>
    </article>
  )
}

export default ProductCard