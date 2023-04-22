import style from "./Navbar.module.css"
import { Link} from "react-router-dom";
import {
  Button,
  Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	IconButton,
  Tooltip,
  Stack,
  RadioGroup,
	useClipboard,
  useDisclosure,
} from "@chakra-ui/react";
import { EmailIcon, HamburgerIcon } from '@chakra-ui/icons'
import React, { useEffect ,useState } from "react";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import store from "../../Redux/Store";
import LowerNav, { LowerNavIcons } from "../LowerNav/LowerNav";


 
export function LinkTag(){
  var [flag , setFlag] = useState(true);
  const mode= store.getState()?.mode
  store.subscribe(()=>{
      setFlag(store.getState().set)
  })

  return (
    <div id={style.link}>
          
          
    <a href="" className={style.Lincomp}> 
       <div className={style.redDiv}  >
       <i class="fa-solid fa-house-user"></i>
       Home
       </div>
     </a>
    <a href="#about" className={style.Lincomp}>	
        <div className={style.redDiv}  >
        <i class="fa-solid fa-address-card" ></i>
          About
        </div>
      </a>
     <a href="#skills" className={style.Lincomp}>
        <div className={style.redDiv}  >
        <i class="fa-solid fa-kitchen-set"></i>
              Skills
         </div>
     </a>

    <a href="#project" className={style.Lincomp}>
      <div className={style.redDiv} >
      <i class="fa-solid fa-person-digging"></i>
         Project
      </div>
     </a>
      <a href='#statics' className={style.Lincomp}>
          <div className={style.redDiv}  >
          <i class="fa-solid fa-chart-line"></i>
              Statics
          </div>
      </a>
        <a href='#contact' className={style.Lincomp}>
            <div className={style.redDiv}   >
            <i class="fa-solid fa-mobile"></i>
            
              Contact
            </div>
         </a>
</div>
)}


export function Icons(){
  const { hasCopied, onCopy, setValue } = useClipboard("");
  const mode= store.getState()?.mode
  return (
       < div id={style.IconCom}>
         <Link target="_blank" to='https://github.com/shivamj291' className={style.Lincons}>
              
              <IconButton
               fontSize='20px'
               border='none'

               bg='none'
               cursor="pointer"
               color='white'
               colorScheme="transparent"
               className={style.iconbtn}
               icon={<BsGithub />}
             />
</Link>
<Link target="_blank" to='https://www.instagram.com/shivam_jaiswall_/'  className={style.Lincons}>
             <IconButton
               fontSize='20px'
               border='none'
               bg='transparent'
               cursor="pointer"
               colorScheme="transparent"
               color='white'
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
               color='white'
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
               color='white'
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
  )
}


function Navbar(){
   
var [flag , setFlag] = useState(true);
const [mode,setMode] = useState(false);
store.subscribe(()=>{
    setMode(store.getState().mode)
})

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
 
 
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('right');



       
    return(

        <div id={style.Navbar} style={flag ? {padding:"25px 0px"} : {padding:"0px"}}>
          <img src='portfolioLogo.png' style={{width:'5%',height:'65px',margin:'auto 0px auto 40px'}} id={style.logo}/>
            <div id={style.linktag}>  
             
               <LinkTag/>
            </div>
           
            <div id={style.icons}>
             
              <Icons/>
        
            </div>

            <div id={style.nameShivam} >
             <Button width='150px' height='30px' border='2px solid white' borderRadius='10px' color='white' id={style.navCv}>SHIVAM</Button>
           
              
            </div>



    <div id={style.small}>



   

 
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
         
        </Stack>
      </RadioGroup>
         <Button colorScheme='rgb(152,156,171)'  onClick={onOpen}>
          <HamburgerIcon/>
         </Button>
      <Drawer placement={placement} onClose={onClose}  isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'  style={!mode ? {backgroundColor:'rgb(9,16,32)'} : {background:'rgb(220,220,220)'}}><h1 style={{textAlign:'center',color:'rgb(152,156,171)',fontSize:'30px'}}>Shivam Jaiswal</h1></DrawerHeader>
          <DrawerBody style = {!mode ? {background:'rgb(14,21,37)'} : {background:'white'}}>
         
          <div id={style.linksmall}>
          
          
          <a href="" className={style.Lincomp} onClick={onClose} style={{fontSize:'22px'}}> 
             <div className={style.redDiv} style = {{color:'rgb(161,165,181)'}}>
             <i class="fa-solid fa-house-user"></i>
             Home
             </div>
           </a>
          <a href="#about" className={style.Lincomp} onClick={onClose} style={{fontSize:'22px'}}>	
              <div className={style.redDiv} style = {{color:'rgb(161,165,181)'}}>
              <i class="fa-solid fa-address-card"></i>
                About
              </div>
            </a>
           <a href="#skills" className={style.Lincomp} onClick={onClose} style={{fontSize:'22px'}}>
              <div className={style.redDiv} style = {{color:'rgb(161,165,181)'}}>
              <i class="fa-solid fa-kitchen-set"></i>
                    Skills
               </div>
           </a>
      
          <a href="#project" className={style.Lincomp} onClick={onClose} style={{fontSize:'22px'}}>
            <div className={style.redDiv} style = {{color:'rgb(161,165,181)'}}>
            <i class="fa-solid fa-person-digging"></i>
               Project
            </div>
           </a>
            <a href='#statics' className={style.Lincomp} onClick={onClose} style={{fontSize:'22px'}}>
                <div className={style.redDiv}  style = {{color:'rgb(161,165,181)'}}>
                <i class="fa-solid fa-chart-line"></i>
                    Statics
                </div>
            </a>
              <a href='#contact' className={style.Lincomp} onClick={onClose} style={{fontSize:'22px'}}>
                  <div className={style.redDiv} style = {{color:'rgb(161,165,181)'}}>
                  <i class="fa-solid fa-mobile"></i>
                    Contact
                  </div>
               </a>
      </div>
          
               
               <LowerNavIcons/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


            </div>
           
        </div>
    )
  
}
export default Navbar
