import logo from './logo.svg';
import './App.css';
import Vijay from './Components/Vijay';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Vijay/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vijay/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
      </Routes>
      </BrowserRouter>

      
      
    </div> 
  );
}

export default App;
