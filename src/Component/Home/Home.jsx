import { useEffect, useRef, useState } from "react"
import style from "./Home.module.css"
import {Link} from "react-router-dom"
import { Button, background } from "@chakra-ui/react";
import { NavStickyAction } from "../../Redux/Action";
import store from "../../Redux/Store";
function Home(){

   
    const [index,setIndex] = useState(0);
  
    const anima = useRef(null);
    const text = useRef(null);
    const statdiv = useRef(null);
    const staticNav = useRef(null);
    const [flag,setFlag] = useState(false)

    const [mode,setMode] = useState(false);
    store.subscribe(()=>{
        setMode(store.getState().mode)
    })

    useEffect(()=>{
       
        NavStickyAction(flag);
         const observer = new IntersectionObserver((entries)=>{
         const ent = entries[0];
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
    
                const txt = anima.current.children;
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
             <div id={style.Home} style={!mode?{backgroundImage:"set5.jpg"}:null}>

<div ref={statdiv} style={{height:"20px",margin:"50px"}}></div>
<div id={style.hometext} >
        <h3 style={flag ? {letterSpacing:"5px",color:"gray",marginTop:"120px"}: {letterSpacing:"5px",color:"gray",marginTop:"250px"}} id={style.myWorld}>WELCOME TO MY WORLD</h3>
        <h1 className={style.size}  style = {!mode ? {color:'white'} : {color:'black'}}>I’m Shivam Jaiswal</h1>

        <p id={style.animated_Text} ref={anima}>
            <span >Web Developer</span>
            <span >MERN Developer</span>
            <span >UI Creator</span>
        </p>
        <h1 className={style.size} style = {!mode ? {color:'white'} : {color:'black'}}>Live in Raisen (M.P.)</h1>
       
       <Link to="shivam_jaiswal.pdf" target="_blank"><Button id={style.cv}>Check My CV</Button></Link>
        
</div>


</div>
        </div>
       
    )
    }
export default Home