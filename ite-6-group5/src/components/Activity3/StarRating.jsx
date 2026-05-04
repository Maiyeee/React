function StarRating({ rating, maxStars = 5 }) {
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starNumber = index + 1

    if (rating >= starNumber) {
      return "★"
    }

    if (rating > index && rating < starNumber) {
      return "½"
    }

    return "☆"
  })

  return (
    <div className="rating-wrapper">
      <div className="stars">
        {stars.map((star, index) => (
          <span
            key={index}
            className={star === "☆" ? "star empty-star" : "star filled-star"}
          >
            {star}
          </span>
        ))}
      </div>

      <span className="rating-text">{rating}</span>
    </div>
  )
}

export default StarRating