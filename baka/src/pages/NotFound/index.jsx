import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound({tema,setTema,corLetra,setCorLetra}) {
  return (
    <div style={{height: '100vh',
    widht: '100vh',
    backgroundColor:tema,
    color:corLetra}}>
        
    Pagina nao encontrada

<Link to={'/home'}>Home</Link>
<Link to={'/about'}>About</Link>
     </div>
  )
}
