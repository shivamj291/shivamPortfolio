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
  return (
    <div id={style.link}>
          
          
    <a href="" className={style.Lincomp}> 
       <div className={style.redDiv}>
       <i class="fa-solid fa-house-user"></i>
       Home
       </div>
     </a>
    <a href="#about" className={style.Lincomp}>	
        <div className={style.redDiv}>
        <i class="fa-solid fa-address-card"></i>
          About
        </div>
      </a>
     <a href="#homeskills" className={style.Lincomp}>
        <div className={style.redDiv}>
        <i class="fa-solid fa-kitchen-set"></i>
              Skills
         </div>
     </a>

    <a href="#homeproject" className={style.Lincomp}>
      <div className={style.redDiv}>
      <i class="fa-solid fa-person-digging"></i>
         Project
      </div>
     </a>
      <a href='#statics' className={style.Lincomp}>
          <div className={style.redDiv}>
          <i class="fa-solid fa-chart-line"></i>
              Statics
          </div>
      </a>
        <a href='#contact' className={style.Lincomp}>
            <div className={style.redDiv}>
            <i class="fa-solid fa-mobile"></i>
              Contact
            </div>
         </a>
</div>
)}


export function Icons(){
  const { hasCopied, onCopy, setValue } = useClipboard("");
  return (
       < div id={style.IconCom}>
         <Link target="_blank" to='https://github.com/shivamj291' className={style.Lincons}>
              
              <IconButton
               fontSize='20px'
               border='none'

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
  )
}


function Navbar(){
   
var [flag , setFlag] = useState(true);

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
            <div id={style.logo}>  
             
                   <LinkTag/>
            </div>
           
            <div id={style.icons}>
             
              <Icons/>
        
            </div>

            <div id={style.nameShivam} >
             <Button width='200px' height='50px' background='transparent' border='2px solid' borderRadius='50px' id={style.navCv}>SHIVAM</Button>
           
              
            </div>



    <div id={style.small}>



   

 
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
         
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue'  onClick={onOpen}>
      <HamburgerIcon/>
      </Button>
      <Drawer placement={placement} onClose={onClose}  isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'  style={{backgroundColor:'rgb(9,16,32)'}}><h1 style={{textAlign:'center',color:'rgb(152,156,171)',fontSize:'40px'}}>Shivam Jaiswal</h1></DrawerHeader>
          <DrawerBody background='rgb(14,21,37)'>
         
          <div id={style.linksmall}>
          
          
          <a href="" className={style.Lincomp} onClick={onClose}> 
             <div className={style.redDiv}>
             <i class="fa-solid fa-house-user"></i>
             Home
             </div>
           </a>
          <a href="#about" className={style.Lincomp} onClick={onClose}>	
              <div className={style.redDiv}>
              <i class="fa-solid fa-address-card"></i>
                About
              </div>
            </a>
           <a href="#homeskills" className={style.Lincomp} onClick={onClose}>
              <div className={style.redDiv}>
              <i class="fa-solid fa-kitchen-set"></i>
                    Skills
               </div>
           </a>
      
          <a href="#homeproject" className={style.Lincomp} onClick={onClose}>
            <div className={style.redDiv}>
            <i class="fa-solid fa-person-digging"></i>
               Project
            </div>
           </a>
            <a href='#statics' className={style.Lincomp} onClick={onClose}>
                <div className={style.redDiv}>
                <i class="fa-solid fa-chart-line"></i>
                    Statics
                </div>
            </a>
              <a href='#contact' className={style.Lincomp} onClick={onClose}>
                  <div className={style.redDiv}>
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
