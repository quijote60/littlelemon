import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Routing from './Components/Routing';
import Heading from './Components/Heading';
import Highlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';
import About from './Components/About';

function App() {
  return (
    <>
    <Nav/>
   <Heading/>
   <Highlights/>
   <Testimonials/>
   <About/>
    <Footer/>
    </>
  );
}

export default App;
