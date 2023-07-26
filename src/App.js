
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return <>
  <BrowserRouter>
    <Header/>
    <main>
    <Home/>
    </main>
    <Footer/>
  </BrowserRouter>
  </>;
}

export default App;
