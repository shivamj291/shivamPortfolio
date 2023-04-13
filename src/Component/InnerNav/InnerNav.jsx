import style from "./InnerNav.module.css"
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
  Tooltip,
	useClipboard,
	IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon,EmailIcon } from '@chakra-ui/icons'


import React, {useRef, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import store from "../../Redux/Store";

function Navbar(){
   
var [flag , setFlag] = useState(true);

    var hide = useRef(null);


    
        const [size, setSize] = React.useState('')
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const handleClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
      
        const sizes = ['sm']



  
  store.subscribe(()=>{
    setFlag(store.getState().set)
  })


  const { hasCopied, onCopy, setValue } = useClipboard("");
    return(

        <div id={style.Navbar} style={flag ? {padding:"25px"} : {padding:"5px"}}>
            <div id={style.logo}>  
               <img src="https://imroz.rainbowit.net/assets/images/logo/logo-symbol-dark.png" id={style.navImg}/>
               <div id={style.link}>
                      <Link to="/" className={style.Lincomp}>Home</Link>
                      <Link to="/about" className={style.Lincomp}>About Me</Link>
                      <Link to="/skill" className={style.Lincomp}>Skills</Link>
                      <Link to="/project" className={style.Lincomp}>Project</Link>
                      <Link to='/contact' className={style.Lincomp}>Contact</Link>
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

      <Drawer onClose={onClose} isOpen={isOpen} size={size} >
        <DrawerOverlay />
        <DrawerContent background='transparent' ref={hide}  onClick={()=>hide.current.setAttribute("style","display:none")}>
          <DrawerCloseButton />
          <DrawerHeader>{}</DrawerHeader>
          <DrawerBody display='grid' gap='20px' width='90%' background='#0E1525' margin='auto'>
            
          <Box background='#145185'> <Link to="/"><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>Home</p></Link></Box>
          <Box background='#145185'> <Link to="/about"><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>About Me</p></Link></Box>
          <Box background='#145185'> <Link to="/skill" ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>Skills</p></Link></Box>
          <Box background='#145185'> <Link to="/project" ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>Project</p></Link></Box>
          <Box background='#145185'> <Link to='/contact' ><p style={{textAlign:"center", color:'white' ,fontSize:"40px"}}>Contact</p></Link></Box>
          
                    

          <Box height='300px'> <Link to=""></Link></Box>
        
             
             

          </DrawerBody>
        </DrawerContent>
      </Drawer>
 

            </div>
           
        </div>
    )
  
}
export default Navbar