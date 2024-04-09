import logo from './logo.svg'
const ReactHookForm = () => {
  return (
    //* VA TODO NUESTRO DISEÑO HTML
    //? Paso #1: Crear el formulario base en JSX
    <div className='login'>
    <div className='login-container'>
      <img src={logo} alt='logo' />
      <form
      
        style={{ display: 'flex', flexDirection: 'column' }}
      >
      
        <label htmlFor='firstName'>Nombre</label>
        <input
          type='text'
          name='firstName'
          placeholder='Tu Nombre'
          id='firstName'
         
        />
        <p></p>

        <label htmlFor='lastName'>Apellido</label>
        <input
          type='text'
          name='lastName'
          placeholder='Tu Apellido'
          id='lastName'
          
        />
        <p></p>

        <label htmlFor='age'>Edad</label>
        <input
          type='number'
          name='age'
          placeholder='Tu Edad'
          id='age'
       
        />
        <p>{/* */}</p>

        <label htmlFor='gender'>Genero</label>
        <select name='gender' id='gender'>
          <option value=''>Elige un genero</option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
          <option value='O'>Otro</option>
        </select>
        <p></p>

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='correo@mail.com'
          id='email'
      
        />
        <p></p>

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
        
        />
        <p>{/* */}</p>

        <button type='submit'>
          Iniciar Sesion
        </button>
      </form>
    </div>
  </div>
  )
}

export default ReactHookForm