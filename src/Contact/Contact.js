import style from "./Contact.module.css"
import {useRef} from "react"
function Contact(){
  
  

    return(
        
            <div style={{backgroundColor:"rgb(14,21,37)",padding:"70px 0px"}} id="contact">
            
            <h1 id={style.feel_Free}>Feel Free to Contact Me</h1>
             <div id={style.contact}>
             
             <form
                    action="https://formspree.io/f/mlekoolj"
                    method="POST"
                    id={style.contact_inputs}
                   
                >
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
        
                    <input type="submit" value="send" />
                  </form>
              <div id={style.side_div}>
                <img src="https://avatars.githubusercontent.com/u/113995939?v=4" className={style.img}/>
              </div>
             </div>
        
             
              
            </div>
          );
    
}
export default Contact