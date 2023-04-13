import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Router from './Routes/Routes';

import HomeProper from './Component/HomeProper/HomeProper';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import HomeSkills from './Component/HomeSkills/HomeSkills';
import HomeProject from './Component/HomeProject/HomeProject';
import Contact from './Contact/Contact';
import LowerNav from './Component/LowerNav/LowerNav';
import PreContact from './Component/PreContact/PreContact';


function App() {
  return (
    <div className="App">
      <Router/>
   
     
      <Contact/>
      <LowerNav/>
    </div>
  );
}

export default App;
