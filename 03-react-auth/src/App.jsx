import './App.css'
import Header from '@/Components/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/Routes/RoutesIndex'
import { AuthProvider } from '@/Context/AuthContext'

function App () {
  return (
  // configurar el router
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

/*
BrowserRouter es un componente
principal en el enrutamiento en
aplicaciones React. Es el encargado
de mantener y actualizar la ubicación
actual en el navegador, y renderizar
los componentes asociados a cada ruta. */
