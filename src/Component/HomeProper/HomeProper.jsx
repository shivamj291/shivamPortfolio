import { useRef, useState } from "react"
import About from "../About/About"
import Home from "../Home/Home"
import HomeProject from "../HomeProject/HomeProject"
import HomeSkills from "../HomeSkills/HomeSkills"
import Navbar from "../Navbar/Navbar"
import style from './HomeProper.module.css'
import store from "../../Redux/Store"
import Contact from "../../Contact/Contact"
import LowerNav from "../LowerNav/LowerNav"
import Static from "../Statics/Statics"
import { background } from "@chakra-ui/react"



function HomeProper(){
    var statdiv = useRef(null);
    var staticNav = useRef(null);
    var [flag,setFlag] = useState(true);

     
    var call = {
        color: "white",
        position: "fixed",
        top: "0",
        background: "rgb(9,16,32)",
        width: "100%",
        zIndex: "3",
    }
     store.subscribe(()=>{
        setFlag(store.getState().set)
     })
    return(
        <div>
             <div ref={staticNav} id={style.navdiv} style={!flag ? call : null}>
                 <Navbar/>
            </div>
           
            <Home/>
            <About/>
            <HomeSkills/>
            <HomeProject/>
            <div style={{background:'rgb(14,21,37)',paddingTop:'60px'}}> <Static/></div>
            <Contact/>
            <LowerNav/>
        </div>
    )
}
export default HomeProper