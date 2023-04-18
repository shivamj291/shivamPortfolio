import { useEffect, useRef, useState } from "react"
import style from "./Home.module.css"
import {Link} from "react-router-dom"
import { Button } from "@chakra-ui/react";
import { NavStickyAction } from "../../Redux/Action";
function Home(){

   
    var [index,setIndex] = useState(0);
  
    var anima = useRef(null);
    var text = useRef(null);
    var statdiv = useRef(null);
    var staticNav = useRef(null);
    var [flag,setFlag] = useState(false)

    
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
       
         observer.observe(statdiv.current);
         
        },[flag])


     
    useEffect(()=>{
    
                var txt = anima.current.children;
                if(txt){
                    for(var i = 0 ; i < txt.length; i ++){
                        if(i == index){
                            txt[index].setAttribute("style","display:block"); 
                        }else{  
                            txt[i].setAttribute("style","display:none"); 
                        }
                    }
                }

                text.current =   setInterval(() => {
                    
                        if(index < txt.length-1){
                            setIndex(index+1);
                        }else{
                            setIndex(0);
                        }
                        
                },1000);
                return ()=> clearInterval(text.current)
    
    },[index])
       
   

   
  
    return(
        <div id="hom">
             <div id={style.Home}>

<div ref={statdiv} style={{height:"20px",margin:"50px"}}></div>
<div id={style.hometext} >
        <h3 style={flag ? {letterSpacing:"5px",color:"gray",marginTop:"120px"}: {letterSpacing:"5px",color:"gray",marginTop:"250px"}} id={style.myWorld}>WELCOME TO MY WORLD</h3>
        <h1 className={style.size}>I’m Shivam Jaiswal</h1>

        <p id={style.animated_Text} ref={anima}>
            <span >Web Developer</span>
            <span >MERN Student</span>
            <span >UI Creator</span>
        </p>
        <h1 className={style.size}>Live in Raisen (m.p.)</h1>
       
       <Link to="shivam_jaiswal.pdf" target="_blank"><Button id={style.cv}>Check My CV</Button></Link>
        
</div>


</div>
        </div>
       
    )
    }
export default Home