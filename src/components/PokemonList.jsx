import React, { useContext } from 'react'
import PokeContext from '../context/PokemonContext'
import PokeCard from './CardPokemon'
import PokeLoader from '../components/Loader'

const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokeContext)

  return (
    <>
      {
        loading ? (
          <PokeLoader />
        ) : (
          <div className='card-list-pokemon container'>
            {filteredPokemons.length ? (
              <>
                {filteredPokemons.map(pokemon => (
                  <PokeCard pokemon={pokemon} key={pokemon.id} />
                ))}
              </>
            ) : (
              <>
                {allPokemons.map(pokemon => (
                  <PokeCard pokemon={pokemon} key={pokemon.id} />
                ))}
              </>
            )}
          </div>
        )
      }
    </>
  )
}

export default PokemonList
