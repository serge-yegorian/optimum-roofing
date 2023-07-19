
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Home from './Home/Home';

function App() {
  return <>
  <BrowserRouter>
    <Header/>
    <Hero/>
    <main>
    <Home/>
    </main>
    <Footer/>
  </BrowserRouter>
  </>;
}

export default App;
