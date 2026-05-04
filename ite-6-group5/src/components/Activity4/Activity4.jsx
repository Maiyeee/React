import { useEffect, useState } from "react"
import "./Activity4.css"
import PokemonCard from "./PokemonCard"

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=12"

function Activity4() {
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url)
            const pokemonData = await pokemonResponse.json()

            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.front_default,
              types: pokemonData.types.map((item) => item.type.name)
            }
          })
        )

        setPokemonList(pokemonDetails)

        setTimeout(() => {
          setLoading(false)
        }, 2000)
      } catch (err) {
        setError("Failed to load Pokemon data")

        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }
    }

    getPokemon()
  }, [])

  return (
    <div className="activity-page">
      <div className="top-box">
        <p className="small-title">Activity 4</p>
        <h1>Pokemon API Gallery</h1>
        <p className="description">
          Data fetched from PokeAPI using React Hooks
        </p>
      </div>

      {loading ? (
        <div className="loader-box">
          <div className="pokeball-loader"></div>
          <h2>Loading Pokemon...</h2>
          <p>Please wait</p>
        </div>
      ) : (
        <>
          {error && <p className="error">{error}</p>}

          <div className="pokemon-container">
            {pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                number={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Activity4