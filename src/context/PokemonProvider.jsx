import React, { useEffect, useState } from 'react'
import PokeContext from './PokemonContext'
import useForm from '../hook/useForm'

const PokemonProvider = ({ children }) => {
    
    const [allPokemons, setAllPokemones] = useState([]);
    const [globalPokemon, setGlobalPokemon] = useState([])
    const [offset, setOffset] = useState(0)

    // Utilizar CustomHook - useForm
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: "",
    })

    //Estados para la aplicacion simples
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    //Llamar 50 Pokemones a la API
    const getAllPokemon = async(limit = 50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch (`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()

        const promises = data.results.map( async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemones([...allPokemons, ...results])
        setLoading(false)
    }

    //Llamar a todos los pokemones de la API
    const getGlobalPokemons = async() => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch (`${baseURL}pokemon?limit=100000&offset=${offset}`)
        const data = await res.json()

        const promises = data.results.map( async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setGlobalPokemon(results)
        setLoading(false)
    }

    //Llamar a un pokemon por ID
    const getPokemonById = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch (`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data
    }

    useEffect(()=>{
        getAllPokemon()
    },[])

    useEffect(()=>{
        getGlobalPokemons()
    },[])



  return (
    <div>
        <PokeContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            getAllPokemon,
            getGlobalPokemons,
            getPokemonById
        }}>
            {children}
        </PokeContext.Provider>
    </div>
  )
}

export default PokemonProvider
