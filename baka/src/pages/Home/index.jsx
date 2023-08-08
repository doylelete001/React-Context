import React from 'react'
import { Link } from 'react-router-dom'
import { TemaContext } from '../../common/Tema'
export default function Home() {
  return (
    <TemaContext.Consumer>
      {({ tema, setTema, corLetra, setCorLetra }) => (<div style={{
        height: '100vh',
        widht: '100vh',
        backgroundColor: tema,
        color: corLetra
      }}>

        BEM VINDO A HOME!!!

        <Link to={'/about'}>About</Link>
        <Link to={'/notfound'}>NotFound</Link>

        <button onClick={() => {
          tema == 'black' ? setTema('white') : setTema('black')
          corLetra == ('black') ? setCorLetra('black') : setCorLetra('white')
        }}> Mudar a Cor </button>
      </div>)}

    </TemaContext.Consumer>
  )
}
