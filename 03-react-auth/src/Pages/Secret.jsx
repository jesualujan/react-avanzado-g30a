import { useAuthContext } from '@/Hook/useAuthContext'

const Secret = () => {
  const { userPayload } = useAuthContext()
  return (
    <>
      <h1> Secret 🙍 </h1>
      {
      userPayload?.role === 'ADMIN'
        ? <h2> Hola Admin! bienvenido ✋</h2>
        : <h2> Hola Customer! bienvenido ✋  </h2>
    }
      {userPayload?.role === 'ADMIN' && <h3> SALUDOS ADMIN </h3>}
      {userPayload?.role === 'CUSTOMER' && <h3> SALUDOS CUSTOMER</h3>}
    </>
  )
}

export default Secret
