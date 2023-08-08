import React, {createContext, useState} from 'react'


export const TemaContext=createContext();
 export function TemaProvider({children}){
    const [tema,setTema]=useState('black');
    const [corLetra,setCorLetra]=useState('white');
    return (

        <TemaContext.Provider value ={{
            tema,
            setTema,
            corLetra,
            setCorLetra
        }}>
        {children}

        </TemaContext.Provider>
    )
 }