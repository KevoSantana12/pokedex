import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Naveg from './components/Navigation'
import Home from './pages/HomePage'
import Pokemon from './pages/PokemonPage'
import  Search from './pages/SearchPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Naveg/>}> 
      <Route index element={<Home/>}/>
          <Route path='pokemon/:id' element={<Pokemon/>}/>
          <Route path='search' element={<Search/>}/>
      </Route>
      <Route path='*' element={<Navigate to={"/"}/>}/>
    </Routes>
  )
}

export default AppRouter
