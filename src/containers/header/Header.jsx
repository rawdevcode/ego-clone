import react from 'react'
import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <nav className='header__container'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='navbar__control'>
                <a  class="navbar-btn">Why Ego</a>
                <div  class="navbar-divider"></div>
                <a  href="/" class="navbar-btn mr-5">Help</a>
                <a  href="/" class="navbar-btn-link">Become a Driver</a>
            </div>
        </nav>
    )
}

export default Header