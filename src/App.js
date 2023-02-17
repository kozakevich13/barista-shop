import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Navbar/> */}
        <Content/>
    </div>
  );
}

export default App;
