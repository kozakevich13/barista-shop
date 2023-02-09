import './Header.css';
import Logo from '../logo/Logo'
import Menu from '../menu/Menu';


function Header() {
  return (
    <div className="header">
       <Logo/>
       <Menu/>
    </div>
  );
}

export default Header;
