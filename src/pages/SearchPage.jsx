import React from 'react'
import PokeContext from '../context/PokemonContext'
import PokeCard from '../components/CardPokemon'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'


const SearchPage = () => {
  const location = useLocation()
  const { globalPokemon } = useContext(PokeContext)
  const filteredPokemons = globalPokemon.filter(pokemon => 
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <p className='p-search'>
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p>

      <div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<PokeCard pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
    </div>
  )
}

export default SearchPage
