import './header.scss'

const Header = () => {
  return (
  // BEM PARA NUESTRAS CLASES EN HTML
  // kebabcase para nombrar nuestras className en React con minúsculas
    <nav className='header'> {/*  BLOQUE */}
      <a className='header__logo' href='/'>LOGO</a>
      <ul className='header__nav-list' />
      <li className='header__list-item'>
        <a className='header__item-link header__item-link--is-active' href='/home'>Home</a>
      </li>
      <li className='header__list-item'>
        <a className='header__item-link' href='/dashboard'>Dashboard</a>
      </li>
      <li className='header__list-item'>
        <a className='header__item-link' href='/secret'>Secret</a>
      </li>
      <li className='header__list-item'>
        <a className='header__item-link' href='/login'>Login</a>
      </li>
      <li className='header__list-item'>
        <a className='header__item-link' href='/signup'>Signup</a>
      </li>
    </nav>
  )
}

export default Header
