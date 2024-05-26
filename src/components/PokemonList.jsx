import React, { useContext } from 'react'
import PokeContext from '../context/PokemonContext'
import PokeCard from './CardPokemon'

const PokemonList = () => {
  const { allPokemons } = useContext(PokeContext)
  
  return (
    <>
      <div className='card-list-pokemon container'>
        {allPokemons.map(pokemon => (
          <PokeCard pokemon={pokemon} key={pokemon.id}/>
        ))}
      </div>
    </>
  )
}

export default PokemonList
