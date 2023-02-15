import Button from '../button/Button';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
        <a className='menu-link' href=''>Головна</a>
        <a className='menu-link' href=''>Про нас</a>
        <a className='menu-link' href=''>ОПТ</a>
        <a className='menu-link' href=''>Сервіс</a>
        <a className='menu-link' href=''>Контакти</a>
        <Button name='Замовити'/>
    </div>
  );
}

export default Menu;
