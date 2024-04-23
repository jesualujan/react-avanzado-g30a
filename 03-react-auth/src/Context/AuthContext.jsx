// useState -> un estado que me diga si estoy logeado
// useEffect -> para revisar si hay un token y me lo cargue a mi estado

import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

//* 1) crear el contexto
const AuthContext = createContext() // va a empezar vacío mi contexto

//* 2) crear el proveedor (provider), es decir maneja de donde se obtiene la información
//* El proveedor es un componente que va a envolver a todos los componentes

// eslint-disable-next-line react/prop-types
function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado/logeado? si o no
  const [userPayload, setUserPayload] = useState(null) // JWT payload decodificado - datos del usuario

  const login = (token) => {
  // guardamos el token en el localStorage del navegador
  // este dato permance aún si el navegador o la pestaña se cierran y se vuelve abrir
    localStorage.setItem('token', token)
    const decode = jwtDecode(token) // decodifica el payload del token
    setUserPayload(decode)
    setIsAuth(true) // ya iniciamos sesión? SI
  }

  const logout = () => {
  // eliminamos el token del localStorage del navegador
    localStorage.removeItem('token')
    setUserPayload(null) // borro el payload del estado
    setIsAuth(false) // cerramos sesión / estoy deslogeado
  }

  useEffect(() => {
  // reperar el token del localStorage, si no existe devolvera null
    const token = localStorage.getItem('token') // para recuperar token es con geItem, para guardar es con setItem
    if (token) {
      const decode = jwtDecode(token) // decodifica el payload del token
      setUserPayload(decode)
      setIsAuth(true)
    }
  }, [])

  // mandamos el objeto
  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  // el proveedor es un componente que envuelve a otros componentes
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
