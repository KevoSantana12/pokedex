import React, { useContext } from 'react'
import PokeContext from '../context/PokemonContext'
import PokeCard from './CardPokemon'

const PokemonList = () => {
  const {getAllPokemon} = useContext(PokeContext)
  
  return (
    <>
      <div className='card-list-pokemon container'>
        {getAllPokemon.map(pokemon => <PokeCard pokemon={pokemon} key={pokemon.id}/>)}
      </div>
    </>
  )
}

export default PokemonList
