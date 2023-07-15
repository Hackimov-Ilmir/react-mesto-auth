import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ link, text, signOut }) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Лого' />
      <Link className='header__link' to={link} onClick={signOut}>
        {text}
      </Link>
    </header>
  );
}

export default Header;
