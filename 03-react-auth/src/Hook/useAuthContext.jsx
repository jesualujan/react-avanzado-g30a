//* 3) crear un hook para usar el contexto y consumir mi contexto
import { useContext } from 'react'
import { AuthContext } from '@/Context/AuthContext'

export const useAuthContext = () => {
  const context = useContext(AuthContext) // quiero usar mi contexto y esto lo guardo en context
  // si no se crea el contexto manda un error, si es undefined (vacío) lanza un error.
  if (!context) {
    throw Error('useAuthContext debe ser usado dentro de AuthProvider')
  }
  return context
}
