
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"
import style from "./Skill.module.css"

function Skill(){
    
    useEffect(()=>{
        AOS.init({duration:500,offset:300})
       
     },[])
    return(
        <div id={style.s}>
          <h1 id={style.heading2} style={{marginTop:"100px"}}>My Skills</h1>
          <p id={style.hp}>	I am an aspiring web developer with a vast array of knowledge in
						many different front end and back end languages, responsive
						frameworks, databases, and best code practices.
						<br />
						My objective is simply to be the best web developer that I can be
						and to contribute to the technology industry all that I know and can
						do. <br />I am dedicated to perfecting my craft by learning from
						more seasoned developers, remaining humble, and continuously making
						strides to learn all that I can about development. <br />I believe
						that my understanding of problem solving and algorithms are also
						skills that have and will continue to contribute to my overall
						success as a developer.</p>
        <h1 id={style.sh1}></h1>
        <div id={style.whole_Skill}>

         
             <div id={style.skill} data-AOS="fade-up">
                    
             <div className={style.round}>
             <img src="javaLogo"/>
            
             </div>
             
             <div className={style.round}>
             <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" />
           
             </div>
           
            <div className={style.round}>
            <img src="cssLogo"/>
          
                </div>
           
            <div className={style.round}>
            <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png"/>
     
            </div>


                <div className={style.round}>
                <img src="mongoLogo"/>
              
                </div>

                <div className={style.round}>
                <img src="express-5-logo-svg-vector.svg"/>
               
                </div>

                
                <div className={style.round}>
                <img src="reactLogo.svg"/>
               </div>

               <div className={style.round}>
             <img src="reduxLogo.png"/>
         
             </div>
             <div className={style.round}>
             <img src="chakra.svg"/>
        
             </div>

                <div className={style.round}>
                <img src="1280px-Node.js_logo.svg.png"/>
               

                </div>
                <div className={style.round}>
                <img src="178-1787134_png-file-svg-github-icon-png.png"/>
               

                </div>

             
             
           
           
           
          
             </div>
             
          
             </div>

        </div>
    )
}
export default Skill