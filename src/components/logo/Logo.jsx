import './Logo.css';
import logo from '../../img/logo.png'

function Logo() {
  return (
    <div className="logo">
        <img className='logo-img' src={logo} alt='logo'/>
        <div className='text-logo'>
          <p id='barista'>Barista</p>
          <p id='shop'>shop</p>
        </div>
    </div>
  );
}

export default Logo;
