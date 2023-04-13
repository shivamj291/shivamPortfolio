import style from "./PreContact.module.css"
import { useEffect } from "react"

function PreContact(){
    
    return(
        <div id={style.contact}>
            <div id={style.contact_Inner_div}>
                
                <p>Contact Me</p>
                <h1 >Shivam Jaiswal</h1>
                <div id={style.cont}>
                  <h3>Mobile number : 9399849603 <br/>
                                            Gmail : shivamj291@gmail.com <br/>
                                            location : Raisen, M.P.  </h3>
                </div>
               
           </div>
       </div>
    )
}
export default PreContact