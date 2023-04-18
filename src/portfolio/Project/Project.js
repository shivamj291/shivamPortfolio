import "./Project.css"

import { Button, background } from "@chakra-ui/react"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"

   
  
 
function Project(){

     
    useEffect(()=>{
        AOS.init({duration:500,offset:300})
       
     },[])
   
    
    return(
        <div id="project">
              
            {/* <h1 id="pheading">Project</h1> */}
        
         <div class="pr"  data-AOS="fade-up">
             <div id="outer_lovoda" >
                <div id="inner_lovoda">
                    <img src="lovoda.gif" id="lovoda_img"/>
                </div>
               
             </div>
                          
                    <div class="text" >
                            <h1>Lovoda</h1>
                            <p>LOVODA® Accessories</p>
                            <p> Jewelry/watches</p>
                            <p>We complete you ♥️ Stunning accessories styled for you.</p>
                            <p>Role - Developed SignUp page and logIn page</p>
                            <p> Tech-Stack -HTML | CSS |Javascript</p>
                           
                            
                            <div style={{display:'flex'}}>
                                <a href="https://comfy-speculoos-0dfe32.netlify.app/" target="_blank">
                                <Button padding='10px 20px' 
                                margin='0px 15px 15px 0px' 
                                borderRadius='10px'
                                backgroundColor='rgb(152,156,171)'
                                color='rgb(14,21,37)'
                                border='none'
                                fontSize='18px'
                                cursor='pointer'
                                className="btnanc"
                                marginTop='8px'
                                >Go Live</Button></a>
                               
                                <a href="https://github.com/shivamj291/Project_Lovoda" target="_blank">
                                <Button padding='10px 20px' 
                                margin='0px 15px 15px 0px' 
                                borderRadius='10px'
                                backgroundColor='rgb(152,156,171)'
                                color='rgb(14,21,37)'
                                border='none'
                                fontSize='18px'
                                cursor='pointer'
                                className="btnanc"
                                marginTop='8px'
                                >Git Link</Button></a>
                            </div>
                           
                    </div>
         
           </div>
           
          <hr className="h1hide"/>
          <div class="pr_ind"  data-AOS="fade-up" >
               <div class="indiamart_text" >
                        <h1>Indiamart</h1>
                        <p>We connect Buyers & Sellers</p>
                        <p> End all your business worries with IndiaMART</p>
                        <p> IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
                        <p>Role - Developed Home page and login page</p>
                        <p>Tech-Stack - HTML,CSS,JAVA-SCRIPT,REST API,LOCAL STORAGE</p>
 


                        <div style={{display:'flex'}}>
                        <a href="https://astonishing-smakager-1c8cc9.netlify.app/" target="_blank">
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                        backgroundColor='rgb(152,156,171)'
                        color='rgb(14,21,37)'
                        border='none'
                        fontSize='18px'
                        cursor='pointer'
                        className="btnanc"
                        marginTop='5px'
                        >Go Live</Button></a>
                      
                        <a href="https://github.com/shivamj291/IndiaMart-Clone" target="_blank">
                            
                            
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                        backgroundColor='rgb(152,156,171)'
                        color='rgb(14,21,37)'
                        border='none'
                        cursor='pointer'
                        fontSize='18px'
                        className="btnanc"
                        marginTop='5px'
                        >Git Link</Button></a>
                        </div>
                     
                </div>
                <div id="outer_indiaMart" >
                    <div id="inner_indiaMart">
                       <img src="indiamartAnim.gif" id="indiamart_img"/>
                    </div>
                   
                </div>
    
            </div>
            <hr className="h1hide"/>
            <div class="pr"  data-AOS="fade-up">
             <div id="outer_lovoda" >
                <div id="inner_lovoda">
                    <img src="acko.png" id="lovoda_img"/>
                </div>
               
             </div>
                          
             <div class="text" >
                    <h1>Acko</h1>
                        <p>We're easy, effortless and 100% digital.</p>
                        
                        <p>  ACKO is an IRDAI licensed General Insurance company.</p>
                        <p>We offer Car, Two-Wheeler, Taxi and Health Insurance plans</p>
                        <p>Role - Developed product Page</p>
                        <p>Tech-Stack - HTML,CSS,JAVA-SCRIPT,REACT,REDUX,CHAKRA UI</p>
                       

                        <a href="https://acko-team.netlify.app/" target="_blank">
                            
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                        backgroundColor='rgb(152,156,171)'
                        color='rgb(14,21,37)'
                        border='none'
                        fontSize='18px'
                        cursor='pointer'
                        className="btnanc"
                        marginTop='5px'
                        >Go Live</Button></a>
                            
                            
                    
                        <a href="https://github.com/RajshreeRajoliya/ACKO/tree/main/acko" target="_blank">
                        <Button padding='10px 20px' 
                        margin='0px 15px 15px 0px' 
                        borderRadius='10px'
                        backgroundColor='rgb(152,156,171)'
                        color='rgb(14,21,37)'
                        border='none'
                        fontSize='18px'
                        cursor='pointer'
                        className="btnanc"
                        marginTop='5px'
                        >Git Link</Button></a>
                    </div>
         
           </div>
          
           
        </div>
    )
}
export default Project