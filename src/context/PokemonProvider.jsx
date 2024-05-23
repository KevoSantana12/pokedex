import React, { useEffect, useState } from 'react'
import PokeContext from './PokemonContext'

const PokemonProvider = ({ children }) => {
    const [offset, setOffset] = useState(0)

    //Llamar 50 Pokemones a la API
    const getAllPokemon = async(limit = 50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch (`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        console.log(data)

        // const promise = data.results.map
    }

    useEffect(()=>{
        getAllPokemon()
    },[])

  return (
    <div>
        <PokeContext.Provider value={{}}>
            {children}
        </PokeContext.Provider>
    </div>
  )
}

export default PokemonProvider
