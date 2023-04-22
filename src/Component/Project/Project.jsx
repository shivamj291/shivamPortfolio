
import style from "./Project.module.css"
import { Box, Button } from "@chakra-ui/react";
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"
import store from "../../Redux/Store";
function Project(){
      useEffect(()=>{
        AOS.init({offset:230})
      },[]) 
      const [mode,setMode] = useState(false);
      store.subscribe(()=>{
          setMode(store.getState().mode)
      })
    return (
        <Box style={!mode?{background:"rgb(14,21,37)",paddingTop:'60px'}:{background:'white',padding:'50px 0'}} id='project' className={style.hompro}  >
          <Box id={style.mypr} style={{fontSize:'25px'}}>
            <h1 id={style.h1} data-AOS="fade-up">My Project</h1>
            {/* ///////////////////////////////////////////////////////////////////////////////////// */}

      
        <div id={style.projectinner} data-AOS="fade-up">
              
      
        
         <div class={style.pr}  data-AOS="fade-up" data-AOS-offset='130'>
             <div id={style.outer_lovoda} style={mode ? {background:'rgb(240,240,240)'}:{background:'rgb(161,165,181)'}}>
                <div id={style.inner_lovoda}>
                    <img src="lovoda.gif" id={style.lovoda_img}/>
                </div>
               
             </div>
                          
                    <div class={style.text}>
                            <h1 style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Lovoda</h1>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>LOVODA® Accessories</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}> Jewelry/watches</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>We complete you ♥️ Stunning accessories styled for you.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Role - Developed SignUp page and logIn page.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}> Tech-Stack -HTML | CSS |Javascript.</p>
                           
                            
                            <div className={style.btnmargin}>
                                <a href="https://comfy-speculoos-0dfe32.netlify.app/" target="_blank">
                                <Button padding='10px 20px' 
                                margin='0px 15px 15px 0px' 
                                borderRadius='10px'
                               style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                                  
                                border='none'
                                fontSize='18px'
                                cursor='pointer'
                                className={style.btnanc}
                                marginTop='8px'
                                >Go Live</Button></a>
                               
                                <a href="https://github.com/shivamj291/Project_Lovoda" target="_blank">
                                <Button padding='10px 20px' 
                                margin='0px 15px 15px 0px' 
                                borderRadius='10px'
                               style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                                
                                border='none'
                                fontSize='18px'
                                cursor='pointer'
                                className={style.btnanc}
                                marginTop='8px'
                                >Git Link</Button></a>
                            </div>
                           
                    </div>
         
           </div>
           
          <hr className={style.h1hide}/>
          <div class={style.pr_ind} data-AOS="fade-up" data-AOS-offset='130'>
               <div class={style.indiamart_text}>
                       
                            <h1 style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Indiamart</h1>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>We connect Buyers & Sellers.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}> End all your business worries with IndiaMART.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}> IndiaMART is India's largest online B2B marketplace.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Role - Developed Home page and login page.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Tech-Stack - HTML | CSS | JavaSript | REST API | LocalStorage.</p>
                    
                       
 


                        <div className={style.btnmarginIn}>
                        <a href="https://astonishing-smakager-1c8cc9.netlify.app/" target="_blank">
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                       style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                        
                       
                        border='none'
                        fontSize='18px'
                        cursor='pointer'
                        className={style.btnanc}
                        marginTop='5px'
                        >Go Live</Button></a>
                      
                        <a href="https://github.com/shivamj291/IndiaMart-Clone" target="_blank">
                            
                            
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                       style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                          
                        border='none'
                        cursor='pointer'
                        fontSize='18px'
                        className={style.btnanc}
                        marginTop='5px'
                        >Git Link</Button></a>
                        </div>
                     
                </div>

             
                <div id={style.outer_indiaMart} style={mode ? {background:'rgb(240,240,240)'}:{background:'rgb(161,165,181)'}} >
                    <div id={style.inner_indiaMart}>
                       <img src="indiamartAnim.gif" id={style.indiamart_img}/>
                    </div>
                </div>


                <div id={style.indiamart_text_hide}>
                            <h1 style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Indiamart</h1>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>We connect Buyers & Sellers.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}> End all your business worries with IndiaMART.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}> IndiaMART is India's largest online B2B marketplace.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Role - Developed Home page and login page.</p>
                            <p style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Tech-Stack - HTML | CSS | JavaSript | REST API | LocalStorage.</p>
                        <div className={style.btnmarginIn} >
                            <a href="https://astonishing-smakager-1c8cc9.netlify.app/" target="_blank">
                            <Button padding='10px 20px' 
                            margin='0px 15px 15px 0px' 
                            borderRadius='10px'
                           style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                              
                            border='none'
                            fontSize='18px'
                            cursor='pointer'
                            className={style.btnanc}
                            marginTop='5px'
                            >Go Live</Button></a>

                            <a href="https://github.com/shivamj291/IndiaMart-Clone" target="_blank">
                            <Button padding='10px 20px' 
                            margin='0px 15px 15px 0px' 
                            borderRadius='10px'
                           style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                              
                            border='none'
                            cursor='pointer'
                            fontSize='18px'
                            className={style.btnanc}
                            marginTop='5px'
                            >Git Link</Button></a>
                        </div>  
                </div>
            </div>

            <hr className={style.h1hide}/>

            <div class={style.pr} data-AOS="fade-up" data-AOS-offset='130'>
             <div id={style.outer_acko} style={mode ? {background:'rgb(240,240,240)'}:{background:'rgb(161,165,181)'}}>
                <div id={style.inner_acko}>
                    <img src="acko.gif" id={style.lovoda_img}/>
                </div>
               
             </div>
                          
             <div class={style.text} >
                        <h1  style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Acko</h1>
                        <p  style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>We're easy, effortless and 100% digital.</p>
                        
                        <p  style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>  ACKO is an IRDAI licensed General Insurance company.</p>
                        <p  style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>We offer Car, Two-Wheeler, Taxi and Health Insurance plans.</p>
                        <p  style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Role - Developed product Page.</p>
                        <p  style={mode?{color:"black"}:{color:'rgb(152,156,171)'}}>Tech-Stack - HTML | CSS | JavaScript | React | Redux | Chakra UI.</p>
                       <div className={style.btnmargin}>

                        <a href="https://acko-team.netlify.app/" target="_blank">
                            
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                       style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                          
                        border='none'
                        fontSize='18px'
                        cursor='pointer'
                        className={style.btnanc}
                        marginTop='5px'
                        >Go Live</Button></a>
                            
                            
                    
                        <a href="https://github.com/RajshreeRajoliya/ACKO/tree/main/acko" target="_blank">
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                      
                        
                          style={!mode ? { color:'rgb(14,21,37)',background:'rgb(152,156,171)'}:{ color:'white',backgroundColor:'rgb(222,220,221)'}}
                        border='none'
                        fontSize='18px'
                        cursor='pointer'
                        className={style.btnanc}
                        marginTop='5px'
                        >Git Link</Button></a>
                        </div>
                    </div>
         
           </div>
          
           </div>
      

            {/* ///////////////////////////////////////////////////////////////////////////////////// */}
          </Box>
        
        </Box>
    )
}
export default Project