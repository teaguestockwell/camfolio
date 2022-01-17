import './app.scss'
import { useState } from 'react';
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Sections from './Sections'
import Footer from './components/footer/Footer'


function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <div className="app">
      <Navbar aboutOpen={aboutOpen} setAboutOpen={setAboutOpen}/>
      {(!aboutOpen ? <Sections/> : <About/>)}
      <Footer/>
    </div>
  );
}

export default App;
