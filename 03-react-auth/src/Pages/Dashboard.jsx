import { useState, useEffect } from 'react'
import { getMeUserService } from '@/Service/useService'

const Dashboard = () => {
  const [userData, setUserData] = useState({})// vacío
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserService(token)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard', error)
      }
    }
    fetchUserData()
  }, [token])

  return (
    <>
      <h3> Bienvenido al Dashboard 😃</h3>
      <h3> Bienvenido a tu perfil </h3>
      <p> aca ustedes pueden agregar estilos de bootstrap, scss para crearle un card al usuario </p>
      {userData?.first_name && <p>{userData.first_name}</p>}
      {userData?.last_name && <p>{userData.last_name}</p>}
      {userData?.gender && <p>{userData.gender}</p>}
      {userData?.email && <p>{userData.email}</p>}
      {userData?.role && <p>{userData.role}</p>}
    </>
  )
}

export default Dashboard
