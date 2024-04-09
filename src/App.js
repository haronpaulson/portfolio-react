import logo from './logo.svg';
import './App.css';
import Header from './Head';
import HomeImage from './HomeImage';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Contactitems from './Contactitems';
import Last from './Last';

function App() {
  return (
    <div className="App  justify-between space-y-4 ">

      <Header />   
     
      <HomeImage /> 
      <About />
      <Skills />
      <Experience />
      <Testimonial />
      <div className=' relative '>
      <div className=''>      <Contact/></div>
      <div className=' absolute top-20 left-[480px]'>
      <Contactitems />
      </div>
      </div>
      <Last />
     
      </div>
      
      

    
  );
}

export default App;
