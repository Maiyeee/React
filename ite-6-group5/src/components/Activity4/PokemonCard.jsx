function PokemonCard({ number, name, image, types }) {
  return (
    <div className="pokemon-card">
      <div className="card-number">#{number}</div>

      <div className="image-box">
        <img src={image} alt={name} />
      </div>

      <h2>{name}</h2>

      <div className="type-box">
        {types.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard