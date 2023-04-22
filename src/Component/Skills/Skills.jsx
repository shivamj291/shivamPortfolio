
import style from "./Skills.module.css"

import { Box, Button, background } from "@chakra-ui/react";

import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useRef} from "react"
import store from "../../Redux/Store";
import { useState } from "react";
function Skills(){
    useEffect(()=>{
        AOS.init();
    },[])
    const [mode,setMode] = useState(false);
    store.subscribe(()=>{
        setMode(store.getState().mode)
    })
    return (
        <Box style={!mode ? {background:"rgb(14,21,37)",paddingTop:'60px' }:{background:'rgb(240,240,240)',padding:'50px 0'}} id='skills' >
       
         <div data-AOS="fade-up">
       
         <Box id={style.mypr}>
            <h1 id={style.h1}>My Skills</h1>
          </Box>
      
      <div id={style.s} data-AOS="fade-up">
       
         
       <h1 id={style.sh1}></h1>
       <div id={style.whole_Skill} >

        
            <div id={style.skill}>
                   
            <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
            <img src="javaLogo"/>
           
            </div>
            
            <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" />
          
            </div>
          
           <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
           <img src="cssLogo"/>
         
               </div>
          
           <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
           <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png"/>
    
           </div>


               <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
               <img src="mongoLogo"/>
             
               </div>

               <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
               <img src="express-5-logo-svg-vector.svg"/>
              
               </div>

               
               <div className={style.round}style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
               <img src="reactLogo.svg"/>
              </div>

              <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
            <img src="reduxLogo.png"/>
        
            </div>
            <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
            <img src="chakra.svg"/>
       
            </div>

               <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
               <img src="1280px-Node.js_logo.svg.png"/>
              

               </div>
               <div className={style.round} style={mode ? {background:'white',boxShadow:'unset'}:{background:'rgb(161,165,181)'}}>
               <img src="178-1787134_png-file-svg-github-icon-png.png"/>
              

               </div>
            </div>
          </div>

       </div>

        
         </div>

          
        </Box>
    )
}
export default Skills