import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from '../pages/NotFound/index'
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import { TemaContext, TemaProvider } from '../common/Tema'

export default function MyRoutes() {
    const [tema,setTema]=useState('black');
    const [corLetra,setCorLetra]=useState('white');
  return (
<BrowserRouter>
<TemaProvider>
<Routes>
    <Route element={ <Home/>} path='/'/>
    <Route element={<About/>} path='/about'/>
    <Route element={<NotFound/>} path='/notfound'/>
</Routes> 
</TemaProvider>
</BrowserRouter>
  )
}
     