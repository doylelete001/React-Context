import React from 'react'
import { Link } from 'react-router-dom'

export default function About({ tema, setTema, corLetra, setCorLetra }) {
  return (
    <div style={{
      height: '100vh',
      widht: '100vh',
      backgroundColor: tema,
      color: corLetra
    }}>

      <Link to={'home'}>Home</Link>
      <Link to={'notfound'}>NotFound</Link>
    </div>
  )
}
