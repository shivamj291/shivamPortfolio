import { useEffect, useRef, useState } from "react"
import About from "../About/About"
import Home from "../Home/Home"
import Project from "../Project/Project"
import Skills from "../Skills/Skills"
import Navbar from "../Navbar/Navbar"
import style from './HomeProper.module.css'
import store from "../../Redux/Store"
import Contact from "../../Contact/Contact"
import LowerNav from "../LowerNav/LowerNav"
import Static from "../Statics/Statics"
import { background } from "@chakra-ui/react"
import { ActionMode } from "../../Redux/Action"
import { Switch,Stack,FormLabel} from '@chakra-ui/react'


function HomeProper(){
    var statdiv = useRef(null);
    var staticNav = useRef(null);
    const [flag ,setFlag] = useState(true);
    
      const [mode ,setMode] = useState(false);
    var call = {
        color: "white",
        position: "fixed",
        top: "0",
        background: "rgb(9,16,32)",
        width: "100%",
        zIndex: "3",
    }
    var callmode = {
        
        position: "fixed",
        top: "0",
        background: "rgb(220,220,220)",
        width: "100%",
        zIndex: "3",
    }
     store.subscribe(()=>{
        setFlag(store.getState().set);
        setMode(store.getState().mode)
     })
     useEffect(()=>{
          ActionMode(mode)
     },[mode])
   
    return(
        <div>
             <div ref={staticNav} id={style.navdiv} style={mode&&!flag ? callmode : !flag ? call: null}>
                 <Navbar/>
            </div>
         


                <Stack direction='row' id={style.theme}>
                    <FormLabel htmlFor='isChecked' color={mode ? "black" : 'white'}>{!mode ? 'Light Mode' : 'Dark Mode'}</FormLabel>
                    <Switch colorScheme="facebook"  size='lg' onChange={()=>setMode( mode ? false : true)} />
                </Stack>
            <Home />
            <About />
            <Skills />

            <Project />
            <Static/>
            <Contact />
            <LowerNav />
        </div>
    )
}
export default HomeProper