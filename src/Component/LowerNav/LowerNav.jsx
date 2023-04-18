import style from "./LowerNav.module.css"
import { Link } from "react-router-dom";
import {IconButton, Tooltip,useClipboard}from "@chakra-ui/react";
import React from "react";
import { EmailIcon } from '@chakra-ui/icons'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export function LowerNavIcons(){
    const { hasCopied, onCopy, setValue } = useClipboard("");
  return( <div id={style.icons} style={{margin:'auto'}}>
               
  <Link target="_blank" to='https://github.com/shivamj291' on>
                         <IconButton
                             fontSize='30px'
                             border='2px solid rgb(152,156,171)'
                             padding='25px 11px'
                             borderRadius='50%'
                             color='rgb(152,156,171)'
                             bg='none'
                             cursor="pointer"
                           
                             icon={<BsGithub />}
                             
                         />
     </Link>


<Link target="_blank" to='https://www.instagram.com/shivam_jaiswall_/'>
                         <IconButton
                             fontSize='30px'
                             border='2px solid rgb(152,156,171)'
                             padding='25px 11px'
                             borderRadius='50%'
                             color='rgb(152,156,171)'
                             bg='none'
                             cursor="pointer"
                             icon={<BsInstagram/>}
             
                         />
</Link>
<Link target="_blank" to='https://www.linkedin.com/in/shivam-jaiswal-43364a23b'>
                         <IconButton
                             fontSize='30px'
                             border='2px solid rgb(152,156,171)'
                             padding='25px 11px'
                             borderRadius='50%'
                             color='rgb(152,156,171)'
                             bg='none'
                             cursor="pointer"
                             icon={<BsLinkedin/>}
                             
                         />
</Link>
<Tooltip label={hasCopied ? "Email Copied!" : "Copy Email"} closeOnClick={false} hasArrow>
<Link>
 <IconButton
     fontSize='30px'
     border='2px solid rgb(152,156,171)'
     padding='25px 11px'
     borderRadius='50%'
     color='rgb(152,156,171)'
     bg='none'
     cursor="pointer"
     className={style.iconbtn}
     icon={<EmailIcon/>}
     onClick={(e) => {
         setValue("shivamj291@gmail.com");
         onCopy();
     }}
                             />
</Link>                   
</Tooltip>

</div>)}

function LowerNav(){
  
    return(

        <div id={style.Navbar}>
            <div id={style.logo}>  
               <img src="https://imroz.rainbowit.net/assets/images/logo/logo-light.png" id={style.navImg}/>
         
            </div>
           <LowerNavIcons/>
        </div>
    )
  
}
export default LowerNav