//* 3) CREAR UN HOOK PARA USAR EL CONTEXTO Y CONSUMIR EL CONTEXTO
import { useContext } from 'react'
import { SongContext } from '@/Context/SongContex'

// hago el export de una función

export const useSongContext = () => {
  const context = useContext(SongContext) // quiero usar mi contexto y esto lo guardo en context
  // si no se crea el contexto manda un error, si es undefined (vacío) lanza un error
  if (!context) {
    throw new Error('useSongContext debe ser usado dentro de SongProvider')
  }
  return context
}
