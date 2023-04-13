import { Link } from "react-router-dom"
import style from "./HomeProject.module.css"
import { useRef } from "react"
import { Box, Button } from "@chakra-ui/react";
function HomeProject(){

    var reff= useRef(null);
    var reff2= useRef(null);
    var reff3= useRef(null);
    var reff4= useRef(null);
    var reff5= useRef(null);
    var reff6= useRef(null);

    function call(refff){
        refff.current.setAttribute("style","display:block")
    }
    function call2(refff){
        refff.current.setAttribute("style","display:none")
    }


    return (
        <Box style={{background:"rgb(14,21,37)"}} id='homeproject' className={style.hompro}>





          <Box id={style.mypr}>
            <Box> <h3 id={style.h3}>My Complete project</h3></Box>
           
            <h1 id={style.h1}>My Latest Project</h1>
            <p id={style.hp}>There are many variations of passages of Lorem Ipsum available <br/>
              but the majority have suffered alteration.</p>
          </Box>

            <Box id={style.prj}>
           
            <Link to='/project' target="_blank">
                     <Box className={style.imag} onMouseEnter={()=>call(reff2)} onMouseLeave={()=>call2(reff2)} backgroundImage='https://imroz.rainbowit.net/assets/images/portfolio/portfolio-4.jpg'
                     >
                     
                       <Box>
                                    
                       <Box marginBottom='50px'>
                       <span style={{color:"white", textAlign:"center"}}>
                        <h3 style={{fontSize:"25px"}}>Shivam Jaiswal</h3>
                        <h1 style={{fontSize:"35px", fontWeight:"600"}}>Web Development</h1>
                         
                        </span>
                     
                                   <Box id={style.imgtxt} ref={reff2} style={{color:"white"}}>

                                    
                                   <Box style={{color:"white",fontSize:"18px"}}>
                                        <p>Lorem Ipsum is simply dummy text  <br/> printing and typesetting industry.</p>   
                                        </Box>
                                     
                                   </Box>
                     </Box>
                      </Box>
                    </Box>
                </Link>


                <Link to="/project" target="_blank">
                     <Box className={style.imag} onMouseEnter={()=>call(reff3)} onMouseLeave={()=>call2(reff3)} backgroundImage='https://imroz.rainbowit.net/assets/images/portfolio/portfolio-5.jpg'>
                     
                       <Box>
                                    
                       <Box marginBottom='50px'>
                       <span style={{color:"white", textAlign:"center"}}>
                        <h3 style={{fontSize:"25px"}}>Shivam Jaiswal</h3>
                        <h1 style={{fontSize:"35px", fontWeight:"600"}}>Web Development</h1>
                         
                        </span>
                     
                                   <Box id={style.imgtxt} ref={reff3} style={{color:"white"}}>

                                    
                                  
                                   <Box style={{color:"white",fontSize:"18px"}}>
                                        <p>Lorem Ipsum is simply dummy text  <br/> printing and typesetting industry.</p>   
                                        </Box>
                                     
                                     
                                   </Box>
                     </Box>
                      </Box>
                    </Box>
                </Link>


                

                <Link to="/project">
                     <Box className={style.imag} onMouseEnter={()=>call(reff4)} onMouseLeave={()=>call2(reff4)} backgroundImage='https://imroz.rainbowit.net/assets/images/portfolio/portfolio-6.jpg'>
                     
                       <Box>
                                    
                       <Box marginBottom='50px'>
                       <span style={{color:"white", textAlign:"center"}}>
                        <h3 style={{fontSize:"25px"}}>Shivam Jaiswal</h3>
                        <h1 style={{fontSize:"35px", fontWeight:"600"}}>Web Development</h1>
                         
                        </span>
                     
                                   <Box id={style.imgtxt} ref={reff4} style={{color:"white"}}>

                                    
                                  
                                   <Box style={{color:"white",fontSize:"18px"}}>
                                        <p>Lorem Ipsum is simply dummy text  <br/> printing and typesetting industry.</p>   
                                        </Box>
                                     
                                     
                                   </Box>
                     </Box>
                      </Box>
                    </Box>
                </Link>


                

                <Link to="/project">
                     <Box className={style.imag} onMouseEnter={()=>call(reff5)} onMouseLeave={()=>call2(reff5)}  backgroundImage= "https://imroz.rainbowit.net/assets/images/portfolio/portfolio-7.jpg">
                     
                       <Box>
                                    
                       <Box marginBottom='50px'>
                        <span style={{color:"white", textAlign:"center"}}>
                        <h3 style={{fontSize:"25px"}}>Shivam Jaiswal</h3>
                        <h1 style={{fontSize:"35px", fontWeight:"600"}}>Web Development</h1>
                         
                        </span>
                     
                                   <Box id={style.imgtxt} ref={reff5} style={{color:"white"}}>

                                    
                                   
                                   <Box style={{color:"white",fontSize:"18px"}}>
                                        <p>Lorem Ipsum is simply dummy text  <br/> printing and typesetting industry.</p>   
                                        </Box>
                                     
                                   </Box>
                     </Box>
                      </Box>
                    </Box>
                </Link>



                

                <Link to="/project">
                     <Box className={style.imag} onMouseEnter={()=>call(reff6)} onMouseLeave={()=>call2(reff6)} backgroundImage='https://imroz.rainbowit.net/assets/images/portfolio/portfolio-8.jpg'>
                     
                    <Box>
                                    
                       <Box marginBottom='50px'>
                       <span style={{color:"white", textAlign:"center"}}>
                        <h3 style={{fontSize:"25px"}}>Shivam Jaiswal</h3>
                        <h1 style={{fontSize:"35px", fontWeight:"600"}}>Web Development</h1>
                         
                        </span>
                     
                            <Box id={style.imgtxt} ref={reff6} style={{color:"white"}}>
                                    <Box style={{color:"white",fontSize:"18px"}}>
                                        <p>Lorem Ipsum is simply dummy text  <br/> printing and typesetting industry.</p>   
                                    </Box>
                            </Box>
                        </Box>
                      </Box>
                    </Box>
                </Link>



                

                <Link to="/project">
                     <Box className={style.imag} onMouseEnter={()=>call(reff)} onMouseLeave={()=>call2(reff)} backgroundImage='https://imroz.rainbowit.net/assets/images/portfolio/portfolio-9.jpg'>
                     
                       <Box>
                                    
                       <Box marginBottom='50px'>
                       <span style={{color:"white", textAlign:"center"}}>
                        <h3 style={{fontSize:"25px"}}>Shivam Jaiswal</h3>
                        <h1 style={{fontSize:"35px", fontWeight:"600"}}>Web Development</h1>
                         
                        </span>
                     
                                   <Box id={style.imgtxt} ref={reff} style={{color:"white"}}>

                                    
                                 
                                   <Box style={{color:"white",fontSize:"18px"}}>
                                        <p>Lorem Ipsum is simply dummy text  <br/> printing and typesetting industry.</p>   
                                        </Box>
                                     
                                     
                                   </Box>
                     </Box>
                      </Box>
                    </Box>
                </Link>








            </Box>

            <Link to="/project">
                <Button
                    size='md'
                    height='68px'
                    width='230px'
                    marginTop='130px'
                    borderRadius='40px'
                    background='rgb(253,71,102)'
                    color="white"
                    fontSize="20px"
                    id={style.hov}
                >
                    View Project
                </Button>
            </Link>


        </Box>
    )
}
export default HomeProject