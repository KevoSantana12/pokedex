import React from 'react'
import AppRout from './AppRouter'
import PokeProvider from './context/PokemonProvider'


function App() {

  return (
    <>
    <PokeProvider>
      <AppRout/>
    </PokeProvider>
    </>
  )
}

export default App
