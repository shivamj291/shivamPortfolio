import { Routes,Route, Outlet } from "react-router-dom"
import style from "./About.module.css"
import { useEffect, useState } from "react"

import { Box, Progress,Stack } from '@chakra-ui/react'
import store from "../../Redux/Store"



 export function Skills(){
   const mode= store.getState()?.mode
    
    return (
        <div>
             <div className={style.fns}>
<div style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>
<li>Html</li>
<li>Css </li>
<li>Js</li>
<li>Java</li>
</div>
<div  style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>
<li>React</li>
<li>Express</li>
<li>Mangodb</li>
<li>Node.js</li>
</div>
 <div  style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>
    <li>Redux</li>
    <li>Chakra Ui</li>
 </div>

</div>
  <div style={{width:"80%",marginTop:'20px'}} id={style.Progress}>
  <p style={{display:'flex',justifyContent:"space-between",width:'80%',color:'rgb(152,156,171)',fontWeight:"600",fontSize:'18px'}}><span >Technical</span><span>80%</span></p>
   <div style={!mode ? {background:'white',height:'4px',width:"80%",borderRadius:'3px',margin:"10px 0px"}: {background:'rgb(240,240,240)',height:'4px',width:"80%",borderRadius:'3px',margin:"10px 0px"}}>
      <div style={{height:'4px',width:"80%",borderRadius:'3px'}} id={style.inn}></div>
   </div>
   <p style={{display:'flex',justifyContent:"space-between",width:'80%',color:'rgb(152,156,171)',fontWeight:"600",fontSize:'18px'}}><span >Communication</span><span>70%</span></p>
   <div style={mode ? {background:'rgb(240,240,240)',height:'4px',width:"80%",borderRadius:'3px',margin:"10px 0px"}:{background:'white',height:'4px',width:"80%",borderRadius:'3px',margin:"10px 0px"}}>
      <div style={{height:'4px',width:"70%",borderRadius:'3px'}} id={style.inn}></div>
   </div>
  </div>
  

        </div>
        
    )
}







export function Experience(){
    const mode= store.getState()?.mode
    return (
        <div className={style.fn}  style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>
           
            <ul>
                <li>
                      Apprentice in P&g Company (Technician)<br/>
                      <p> 2019 - 2020</p>
                     
                </li>
                <li>
                      Trainee-Operator in GCPL Company<br/>
                      <p> 2021- 2022</p>
                     
                </li>
               
               
            </ul>
        </div>
    )
}
export function Education(){
    const mode= store.getState()?.mode
    return (
        <div className={style.fn}  style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>
          
            <ul>
                <li>
                      ITI(Mechanical Motor Vehicle)<br/>
                      <p>2015 - 2017</p>
                      
                </li>
                <li>
                      BA-Barkatullah University<br/>
                      <p>2018 - 2020</p>
                      
                </li>
                <li>
                       Full Stack Web Development Course - Masai School<br/>
                       <p>Apr 2022 - march 2023</p>
                      
                </li>
            </ul>
        </div>
    )
}
export function Awards(){
    const mode= store.getState()?.mode
    return(
        <div className={style.fn}  style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>
            <ul>
                    Got 3rd price in the Project Presentation in Masai School.<br/>
            </ul>
            <ul>
            <span className={style.highLight}>website name - </span>Lovoda.<br/>
            </ul>
            <ul>
            <span className={style.highLight}>tech stack - </span>
            HTML, CSS, Java Script.<br/>
            </ul>
            <ul>
            <span className={style.highLight}>Role - </span> 
            Develop LogInPage and SignUp Page.
            </ul>
                   
                    
                   
        </div>
    )
}

function About(){

    var [awa,setAwa] = useState(false);
    var [skil,setSkil] = useState(true);
    var [exp,setExp] = useState(false);
    var [edu,setEdu] = useState(false);
    
    const [mode,setMode] = useState(false);
   
    store.subscribe(()=>{
        setMode(store.getState().mode)
    })
    
console.log(mode)
    function skillfn(){
        setAwa(false);
        setSkil(true);
        setExp(false);
        setEdu(false);
    }
    function expfn(){
        setAwa(false);
        setSkil(false);
        setExp(true);
        setEdu(false)
    }
    function edufn(){
        setAwa(false);
        setSkil(false);
        setExp(false);
        setEdu(true)
    }
    function awafn(){
        setAwa(true);
        setSkil(false);
        setExp(false);
        setEdu(false)
    
    }
    return(
        <div id='about'>
       
<div id={style.Aboutt}  style={mode ?{backgroundColor:'white'}:{backgroundColor:'rgb(14,21,37)'}}>
<h2 id={style.abouth2hide}>About Me</h2>
           <div id={style.image_hide} style={!mode ? {backgroundColor:'rgb(9,16,32)'}:{backgroundColor:'rgb(240,240,240)'}}>
                <img src="set5.jpg"/>
                 <div id={style.hideP}>
                    <p id={style.hideaboutpara2} style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>As a full stack web developer, I am passionate about creating seamless user experiences through my expertise in JavaScript, HTML, CSS, and React. With a strong command of these languages, I am able to craft dynamic front-end applications that engage users and drive results. Additionally, my skills extend to the back-end, where I can build robust systems that are both efficient and secure. Whether working solo or as part of a team, I am committed to delivering top-quality solutions that exceed expectations. </p>
                 </div>
           </div>


    <div id={style.image}><img src="set5.jpg"/></div>
        <div id={style.textabout} >

           
                <h2 id={style.abouth2} >About Me</h2>
                <p id={style.aboutpara2} style={mode ? {color:'black'}:{color:'rgb(152,156,171)'}}>As a full stack web developer, I am passionate about creating seamless user experiences through my expertise in JavaScript, HTML, CSS, and React. With a strong command of these languages, I am able to craft dynamic front-end applications that engage users and drive results. Additionally, my skills extend to the back-end, where I can build robust systems that are both efficient and secure. Whether working solo or as part of a team, I am committed to delivering top-quality solutions that exceed expectations.
                </p>
           
           <hr id={style.fold}/>
           <div id={style.textboxinner}>
                <ul id={style.aboutnav}>
                        <span onClick={skillfn} style={skil ? {  backgroundColor:"#FD4766",borderRadius:"50em"}: null }><div style={{display:'flex',gap:"5px",justifyContent:'center'}} className={style.sidepadingl}><p style={mode&&skil ? {color:"white"}: mode ? {color:'black'} : {color:'white'}}>Main</p><p  style={mode&&skil ? {color:"white"}: mode ? {color:'black'} : {color:'white'}}>skills</p></div></span>
                        <span onClick={awafn}  style={awa ? {  backgroundColor:"#FD4766",borderRadius:"50px"}: null}><p  style={mode&&awa ? {color:"white"}: mode ? {color:'black'} : {color:'white'}}>Awards</p></span>
                        <span onClick={expfn}  style={exp ? {  backgroundColor:"#FD4766",borderRadius:"50px"}: null}><p  style={mode&&exp ? {color:"white"}: mode ? {color:'black'} : {color:'white'}}>Experience</p></span>
                        <span onClick={edufn}  style={edu ? {  backgroundColor:"#FD4766",borderRadius:"50px"}: null} className={style.sidepadingr}><p  style={mode&&edu ? {color:"white"}: mode ? {color:'black'} : {color:'white'}}>Education</p></span>
                    </ul>
                <hr/>
                    <div id={style.box}>
                        <span>{ awa ?  <Awards /> :  null} </span>
                        <span>{ skil ?  <Skills/> :  null} </span>
                        <span>{ exp ?  <Experience/> :  null}</span>
                        <span>{ edu?  <Education/> :  null} </span>
                    </div>
           </div>
        
           </div>
        </div>
        </div>
       
    )
}
export default About