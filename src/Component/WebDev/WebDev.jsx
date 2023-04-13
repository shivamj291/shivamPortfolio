
import style from './WebDev.module.css'
import Navbar from '../InnerNav/InnerNav';
import { useEffect, useRef, useState } from 'react';
import { NavStickyAction } from '../../Redux/Action';


function WebDev(){
     var reff = useRef(null);
     var [flag,setFlag] = useState(false);
    useEffect(()=>{
       
        NavStickyAction(flag);
         const observer = new IntersectionObserver((entries)=>{
         var ent = entries[0];
            if(ent.isIntersecting){
            
                setFlag(true)
            }else{
               
                setFlag(false)
            }
         },{
           root:null,
           rootMargin: " ",
           threshold:1.0
         })
       
         observer.observe(reff.current);
         
        },[flag])

        
     
    var call = {
      color: "white",
      position: "fixed",
      top: "0",
      background: "rgb(9,16,32)",
      width: "100%",
      zIndex: "3",

  
  }

    return (
        <div id={style.skills}>
          
          <div id={style.bgi}>
            <div style={ !flag ? call :null} id={style.nav}><Navbar/></div>
            <h1 id={style.heading} ref={reff}>Website Development</h1>
          </div>
       

        </div>
    )
}
export default WebDev