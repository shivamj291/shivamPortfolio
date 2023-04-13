import { Routes,Route, Outlet } from "react-router-dom"
import style from "./About.module.css"
import { useState } from "react"

import { Box, Progress,Stack } from '@chakra-ui/react'



 export function Skills(){
    return (
        <div>
             <div className={style.fns}>

            

<div>
<li>Html</li>
<li>Css </li>
<li>Js</li>
<li>Java</li>
</div>
<div>
<li>React</li>
<li>Express</li>
<li>Mangodb</li>
<li>Node.js</li>
</div>
 <div>
    <li>Redux</li>
    <li>Chakra Ui</li>
 </div>

</div>
<Box  id={style.prog}>
    <h3 style={{color:"white", textAlign:"left"}}>Technical</h3>
    <span><Progress value={80} /></span>
    <h3 style={{color:"white", textAlign:"left"}}>Communication</h3>
    <Progress value={50} />
</Box>

        </div>
        
    )
}







export function Experience(){
    return (
        <div className={style.fn}>
           
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
    return (
        <div className={style.fn}>
          
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
    return(
        <div className={style.fn}>
            <ul>
                    Got 3rd price in the construct week project in unit 4.<br/>
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

   
    

    function skillfn(){
        setAwa(false);
        setSkil(true);
        setExp(false);
        setEdu(false)
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

<div id={style.Aboutt}>
           <div id={style.image}><img src="https://pps.whatsapp.net/v/t61.24694-24/339892286_923466469104639_3924182173794610925_n.jpg?ccb=11-4&oh=01_AdSYt4jTzl-GOYdmNeap_PiTrqB0wA4Yx2i3W5b8kD89ew&oe=643E7ACB" width="100%"/></div>
           <div id={style.textabout}>

            <p id={style.aboutpara1}>My About Details</p>
            <h2 id={style.abouth2}>About Me</h2>
            <p id={style.aboutpara2}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour.</p>
           <hr id={style.fold}/>
             <div id={style.aboutnav}>
                <span onClick={skillfn} style={skil ? {  backgroundColor:"#FD4766",borderRadius:"50px"}: null}>My Skills</span>
                <span onClick={awafn}  style={awa ? {  backgroundColor:"#FD4766",borderRadius:"50px"}: null}>Awards</span>
                <span onClick={expfn}  style={exp ? {  backgroundColor:"#FD4766",borderRadius:"50px"}: null}>Experience</span>
                <span onClick={edufn}  style={edu ? {  backgroundColor:"#FD4766",borderRadius:"50px"}: null}>Education</span>
             </div>
           <hr/>
               <div>
                <span>{ awa ?  <Awards/> :  null} </span>
                <span>{ skil ?  <Skills/> :  null} </span>
                <span>{ exp ?  <Experience/> :  null}</span>
                <span>{ edu?  <Education/> :  null} </span>
           

               </div>
           </div>
        </div>
        </div>
       
    )
}
export default About