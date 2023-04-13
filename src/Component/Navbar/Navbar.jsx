import style from "./Navbar.module.css"
import { Link} from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	IconButton,
  Tooltip,
	useClipboard,
  useDisclosure,
} from "@chakra-ui/react";

import { EmailIcon, HamburgerIcon } from '@chakra-ui/icons'
import React, { useEffect, useRef, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsPerson, BsTwitter, BsYoutube } from "react-icons/bs";
import store from "../../Redux/Store";

function Navbar(){
   
var [flag , setFlag] = useState(true);

       var hide = useRef(null)


    
        const [size, setSize] = React.useState('')
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const handleClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
      
        const sizes = ['sm']


  useEffect(()=>{
          
      var observer = new IntersectionObserver(()=>{},{
             root:null,
             rootMargin: " ",
             threshold:1.0
             
      })

     
  },[])


  
  store.subscribe(()=>{
    setFlag(store.getState().set)
  })

  const { hasCopied, onCopy, setValue } = useClipboard("");
       
    return(

        <div id={style.Navbar} style={flag ? {padding:"25px 0px"} : {padding:"5px"}}>
            <div id={style.logo}>  
               <img src="https://imroz.rainbowit.net/assets/images/logo/logo-symbol-dark.png" id={style.navImg}/>
               <div id={style.link}>
              
              
                      <a href="" className={style.Lincomp}>Home</a>
                      <a href="#about" >About Me</a>
                      <a href="#homeskills" className={style.Lincomp}>Skills</a>
                      <a href="#homeproject" className={style.Lincomp}>Project</a>
                      <a href='#contact' className={style.Lincomp}>Contact</a>
                     


              
              </div>
            </div>
           
            <div id={style.icons}>
            <Link target="_blank" to='https://github.com/shivamj291' className={style.Lincons}>
										                         	<IconButton
												                        fontSize='20px'
                                                border='none'
                                                color='white'
											                          bg='none'
                                                cursor="pointer"
                                                colorScheme="transparent"
                                                className={style.iconbtn}
                                                icon={<BsGithub />}
                                              />
		    	  </Link>
            <Link target="_blank" to='https://www.instagram.com/shivam_jaiswall_/'  className={style.Lincons}>
                                              <IconButton
                                                fontSize='20px'
                                                border='none'
                                                color='white'
                                                bg='transparent'
                                                cursor="pointer"
                                                colorScheme="transparent"
                                                icon={<BsInstagram/>}
                                                className={style.iconbtn}
						                                 	/>
			     </Link>
            <Link target="_blank" to='https://www.linkedin.com/in/shivam-jaiswal-43364a23b'  className={style.Lincons}>
										                    	    <IconButton
											                        	fontSize='20px'
                                                border='none'
											                          bg='none'
                                                
                                                cursor="pointer"
                                                colorScheme="transparent"
                                                className={style.iconbtn}
												                        icon={<BsLinkedin/>}
												                      />
		      	</Link>
            <Tooltip label={hasCopied ? "Email Copied!" : "Copy Email"} closeOnClick={false} hasArrow>
                <Link>
                                            <IconButton
											                      	fontSize='25px'
                                                border='none'
											                          bg='none'
                                                cursor="pointer"
                                                colorScheme="transparent"
                                                className={style.iconbtn}
												                        icon={<EmailIcon/>}
                                                onClick={(e) => {
                                                  setValue("shivamj291@gmail.com");
                                                  onCopy();
                                                }}
												                      />
                  </Link>                   
							</Tooltip>
        
            </div>

            <div id={style.resume} >
              <Button width='200px' height='50px' background='transparent' border='2px solid' borderRadius='50px' id={style.navCv}>RESUME</Button>
            </div>



    <div id={style.small}>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
          background='white'
          color="black"
        ><HamburgerIcon/></Button>
      ))}

      <Drawer onClose={onClose}  isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent background='transparent'border='5px solid red' ref={hide}  onClick={()=>hide.current.setAttribute("style","display:none")}>
          <DrawerCloseButton />
          <DrawerHeader>{}</DrawerHeader>
          <DrawerBody display='grid' gap='20px' width='90%' background='#0E1525' margin='auto'>
            
          <Box background='#145185'> <a href="" ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>home</p></a></Box>
          <Box background='#145185'> <a href="#about" ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>About</p></a></Box>
          <Box background='#145185'> <a href="#homeskills" ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>Skills</p></a></Box>
          <Box background='#145185'> <a href="#homeproject" ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>Project</p></a></Box>
          <Box background='#145185'> <a href='#contact' ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>Contact</p></a></Box>

          <Box height='300px'> <Link to=""></Link></Box>
        
             
      
                    
             

          </DrawerBody>
        </DrawerContent>
      </Drawer>
 

            </div>
           
        </div>
    )
  
}
export default Navbar