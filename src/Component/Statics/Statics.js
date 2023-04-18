import style from "./Statics.module.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"

   
  
function Static(){
   
    useEffect(()=>{
        AOS.init({duration:500,offset:300})
       
     },[])
   
    return(
        <div id="statics" className={style.staticclass} data-AOS="fade-up" > 
           
                <h1 id={style.staticheading}>Statics</h1>
                <div id={style.staflex}>
                <div className={style.outer} >
                    <div className={style.inner}>
                        <img src=" https://github-readme-streak-stats.herokuapp.com/?user=shivamj291&theme=dark&hide_border=false" id={style.staticimg2}/>
                    </div>
                </div>
               
                
                <div className={style.outer} >
                    <div className={style.inner}>
                        <img src="https://github-readme-stats.vercel.app/api?username=shivamj291&theme=dark&hide_border=false&include_all_commits=true&count_private=true" id={style.staticimg}/>
                    </div>
                </div>
                </div>

              

                
                <div className={style.outer} >
                    <div className={style.inner}>
                        <div id={style.imgdiv3}>
                            <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shivamj291&theme=radical" id={style.staticimg3}/>
                    
                        </div>
                  
                    </div> 
                </div>
             
         </div>
    )
}
export default Static
