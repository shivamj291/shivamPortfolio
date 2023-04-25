import { useEffect, useRef, useState } from "react"
import About from "../About/About"
import Home from "../Home/Home"
import Project from "../Project/Project"
import Skills from "../Skills/Skills"
import Navbar from "../Navbar/Navbar"
import style from './HomeProper.module.css'
import store from "../../Redux/Store"
import Contact from "../../Contact/Contact"
import LowerNav from "../Footer/Footer"
import Static from "../Statics/Statics"
import { background } from "@chakra-ui/react"
import { ActionMode } from "../../Redux/Action"
import { Switch,Stack,FormLabel} from '@chakra-ui/react'
import { MoonIcon, SunIcon} from '@chakra-ui/icons'


function HomeProper(){
    const statdiv = useRef(null);
    const staticNav = useRef(null);
    const [flag ,setFlag] = useState(true);
    
    const [mode ,setMode] = useState(true);
    const call = {
        color: "white",
        position: "fixed",
        top: "0",
        background: "rgb(9,16,32)",
        width: "100%",
        zIndex: "3",
    }
    const callmode = {
        
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
                  
                    <FormLabel htmlFor='isChecked' color="white" ><SunIcon/></FormLabel>
                    <Switch colorScheme="facebook"  size='lg' onChange={()=>setMode( mode ? false : true)} />
                    <FormLabel htmlFor='isChecked' color= 'black'><MoonIcon/></FormLabel>
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