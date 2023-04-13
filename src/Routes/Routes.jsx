import { Route,Routes} from "react-router-dom";


import Project from "../Component/Project/Project";
import HomeProper from "../Component/HomeProper/HomeProper";

import About from "../Component/About/About";
import HomeSkills from "../Component/HomeSkills/HomeSkills";

import Navbar from "../Component/InnerNav/InnerNav";
import WebDev from "../Component/WebDev/WebDev";
import Skill from "../Component/Skill/Skill";
import PreContact from "../Component/PreContact/PreContact";
import LowerNav from "../Component/LowerNav/LowerNav";
import Location from "../Component/Location/Location";
function Router(){
    return (
        <div>
           
        
          
        <Routes>
                <Route path="/" target='_blank' element={<HomeProper/>}/>
                <Route path="/about" target='_blank' element={<div><WebDev/><About/></div>}/>

                <Route path="/skill" target='_blank' element={<div><WebDev/><Skill/></div>}/>
                <Route path='/project' target='_blank' element={<div><WebDev/><Project/></div> }/>
                <Route path='contact' target='_blank' element={<div><WebDev/><Location/></div> }/> 
        </Routes>
               
        
        </div>
    )
}
export default Router

