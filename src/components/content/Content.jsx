import './Content.css';
import Logo from '../logo/Logo'
import Menu from '../menu/Menu';
import Button from '../button/Button';


function Content() {
  let textContent = `Кава - це супутник творчих людей. 
  Якщо ранок починати з ароматної кави ,то 
  день стане куди цікавішим`
  return (
    <div className="content">
      {/* <div className='text-content'>
        <p className='content-header'>Кава в зернах</p>
        <p className='main-content'>{textContent}</p>
        <button className='btn-goods'>Всі товари</button>
      </div> */}
      
     
    </div>
  );
}

export default Content;
