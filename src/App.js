import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <div className='px-5 md:px-0'>
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
      <div className='px-0'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
