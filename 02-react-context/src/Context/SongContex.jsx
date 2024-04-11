//* CONTEXT tiene que ver con el manejo de estados globales en React
//* Es decir, podemos compartir la misma información entre componentes
//* de diferente jerarquia en el árbol de componentes.

import { createContext, useState, useEffect } from 'react'
import canciones from '@/Utils/listaCanciones.json'

//* 1) CREAR EL CONTEXTO
const SongContext = createContext() //* va a empezar vacío mi contexto

//* 2) CREAR EL PROVEDOR DEL CONTEXTO, ES DECIR MANEJA DE DONDE SE OBTIENE LA INFORMACIÓN
//* Y COMO SE COMPARTE
//* EL PROOVEDOR VA A ENVOLVER A TODOS LOS COMPONENTES QUE QUIERAN CONSUMIR EL CONTEXTO.

// eslint-disable-next-line react/prop-types
function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿está cargando?
  const [selectedSong, setSelectedSong] = useState({}) // canción seleccionada
  const [search, setSearch] = useState('') // Identifica la palabra que pongo en el buscador

  //* SIMULAMOS LA LLAMADA A LA API

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false) // cambia a false xk ya están cargando las canciones
    }, 2000)
  }, [])

  // mandamos un objeto
  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  // el provedor (provider) es un componente que envuelve a otros componentes
  // y le pasa el objeto data que contiene la información que necesita.
  return (
  // return de un componente
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export { SongContext, SongProvider }
