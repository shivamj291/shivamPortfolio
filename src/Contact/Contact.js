import style from "./Contact.module.css"
import Location from "../Component/Location/Location";
import {useRef} from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"
import store from "../Redux/Store";
function Contact(){
  
  useEffect(()=>{
    AOS.init()
   
 },[])
 const [mode,setMode] = useState(false);
 store.subscribe(()=>{
     setMode(store.getState().mode)
 })

    return(
        
            <div style={!mode ? {background:"rgb(14,21,37)",padding:"50px 0px"  }:{background:'white',padding:"50px 0px" }}  id="contact">
            <div className={style.ninty}> 
            <h1 id={style.feel_Free}data-AOS="fade-up" >Feel Free for Contact Me</h1>
             <div id={style.contact}>
              
                       
             <form
                    action="https://formspree.io/f/mlekoolj"
                    method="POST"
                    id={style.contact_inputs}
                    data-AOS="fade-up"
                >
                  <div>
              <h3  style = {{color:'white',fontSize:"20px",textAlign:'left'}} id={style.hii}>Let's say hii</h3>
              <h1  id={style.hire} style={mode?{color:"rgb(9,16,32)"}:{color:'white'}}>Hire Me</h1>
              <p style={{textAlign:'left'}}><span style={{color:'rgb(111,115,112)',fontSize:"18px",textAlign:'left'}}>Call me directly :</span> <span style={{color:'rgb(152,156,171)',fontSize:"21px",textAlign:'left'}}>+919399849603</span></p>  
              <p style={{textAlign:'left'}}><span style={{color:'rgb(111,115,112)',fontSize:"18px",textAlign:'left'}}>Gmail :</span> <span style={{color:'rgb(152,156,171)',fontSize:"21px",textAlign:'left'}}>Shivamj291@gmail.com</span></p>  
           
              </div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Your Name"
                      autoComplete="off"
                      required
                    />
                    <input
                      type="number"
                      name="Phone"
                      placeholder="Your Number"
                      autoComplete="off"
                      minLength='10'
                      required
                    />
                   
                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email"
                      autoComplete="off"
                      required
                    />

                     <input
                      type="text"
                      name="Subject"
                      placeholder="Subject"
                      autoComplete="off"
                      required
                    />
        
                    <textarea 
                      name="message"
                      cols="30"
                      rows="4"
                      autoComplete="off"
                      placeholder="Your Message"
                      required></textarea>
        
                    <input type="submit" value="Send" />
                  </form>
              <div id={style.side_div} style={!mode?{background:"rgb(9,16,32)"}:{background:'white'}} data-AOS="fade-up">
                     <Location/>
              </div>
             </div>
        
             
              
            
            </div>
            
            </div>
          );
    
}
export default Contact
