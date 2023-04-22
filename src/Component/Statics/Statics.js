import style from "./Statics.module.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"
import store from "../../Redux/Store"
  
function Static(){
   
    useEffect(()=>{
        AOS.init()
       
     },[])
     const [mode,setMode] = useState(false);
     store.subscribe(()=>{
         setMode(store.getState().mode)
     })
    return(
        <div style={ !mode ? {background:"rgb(14,21,37)"} : {background:'rgb(240,240,240)',paddingTop:'60px'}} id="statics">
        <div  className={style.staticclass} style={!mode ? {background:'rgb(14,21,37)',paddingTop:'60px'}:{background:'rgb(240,240,240)',paddingBottom:'30px'}}> 
           
                <h1 id={style.staticheading}  data-AOS="fade-up">Statics</h1>
                <div data-AOS="fade-up">
                <div id={style.staflex}  >
                <div className={style.outer} >
                    <div className={style.inner}>
                   {mode ? <img src=" https://github-readme-streak-stats.herokuapp.com/?user=shivamj291&theme=light&hide_border=false" id={style.staticimg2}/>:<img src=" https://github-readme-streak-stats.herokuapp.com/?user=shivamj291&theme=dark&hide_border=false" id={style.staticimg2}/>
 } </div>
                </div>
               
                
                <div className={style.outer} >
                    <div className={style.inner}>
                        {mode ?  <img src="https://github-readme-stats.vercel.app/api?username=shivamj291&theme=light&hide_border=false&include_all_commits=true&count_private=true" id={style.staticimg}/> :
                         <img src="https://github-readme-stats.vercel.app/api?username=shivamj291&theme=dark&hide_border=false&include_all_commits=true&count_private=true" id={style.staticimg}/>}
                       
                    </div>
                </div>
                </div>
                
                <div className={style.outer} >
                    <div className={style.inner}>
                        <div id={style.imgdiv3}>

                            {mode ? <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shivamj291" id={style.staticimg3}/>
                            :<img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shivamj291&theme=radical" id={style.staticimg3}/>}
                             
                        </div>
                  
                    </div> 
                </div>
             
                </div>
                </div>
         </div>
    )
}
export default Static
