import React from 'react'
import PokeContext from '../context/PokemonContext'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'


const SearchPage = () => {
  const location = useLocation
  const {globalPokemons} = useContext(PokeContext)
  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state))

  return (
    <div>
      <h1>Search</h1>
    </div>
  )
}

export default SearchPage
