import { Link } from "react-router-dom"
import style from "./HomeSkills.module.css"
import { useRef } from "react"
import { Box, Button } from "@chakra-ui/react";
function HomeSkills(){


    return (
        <Box style={{background:"rgb(14,21,37)"}} id='homeskills' className={style.homskil}>





          <Box id={style.mypr}>
            <Box> <h3 id={style.h3}>What I can do for you</h3></Box>
           
            <h1 id={style.h1}>My Skills</h1>
            <p id={style.hp}>There are many variations of passages of Lorem Ipsum available <br/>
              but the majority have suffered alteration.</p>
          </Box>

            <Box id={style.prj}>
           
            <Link to="/skill" target="_blank">
            <Box style={{borderRadius:'15px'}} className={style.imag}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" width='55px' className={style.img}/>
                     <Box  color='white'   margin='auto'  className={style.skillTxt}>
                        <h1 style={{margin:'10px 0', fontSize:'25px'}}>HTML</h1>
                        HTML stands for Hyper Text Markup Language
                        HTML is the standard markup language for creating Web pages
                     
                     </Box>
            </Box>
                
            </Link>

            <Link to="/skill" target="_blank" >
            <Box style={{borderRadius:'15px'}} className={style.imag}>
                     <img src="cssLogo" width="55px" className={style.img}/>
                     <Box  color='white'   margin='auto'  className={style.skillTxt}>
                      <h1 style={{margin:'10px 0', fontSize:'25px'}}>CSS</h1>
                        CSS stands for Cascading Style Sheets
                        CSS describes how HTML elements are to be displayed on screen...
                     </Box>
                </Box>
              
            </Link>

            <Link to="/skill" target="_blank">
            <Box style={{borderRadius:'15px'}} className={style.imag}>
                  <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" width="55px" className={style.img}/>
                     <Box  color='white'   margin='auto'  className={style.skillTxt}>
                     <h1 style={{margin:'10px 0', fontSize:'25px'}}>Java Script</h1>
                        JavaScript is the world's most popular programming language.
                        JavaScript is the programming language of the Web.
                     </Box>
            </Box>
               
            </Link>

         

            <Link to="/skill" target="_blank" >
            <Box style={{borderRadius:'15px'}} className={style.imag}>

                    <img src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" width="58px"  className={style.img}/>
                     <Box  color='white'   margin='auto'  className={style.skillTxt}>
                     <h1 style={{margin:'10px 0', fontSize:'25px'}}>MongoDB</h1>
                        MongoDB is a source-available cross-platform document-oriented database program developed by Alfons Kemper.
                     </Box>
            </Box>
                
            </Link>

            <Link to="/skill" target="_blank" >
            <Box style={{borderRadius:'15px'}} className={style.imag}>
                    <img src="https://t3.ftcdn.net/jpg/03/47/42/98/360_F_347429829_LhBd6fIJYzWZXg21HfDBm7Ze38akG9DS.jpg" width="55px" className={style.img}/>
                     <Box  color='white'  margin='auto'  className={style.skillTxt}>
                     <h1 style={{margin:'10px 0', fontSize:'25px'}}>Express</h1>
                        Express.js or Express, is a back end web application framework for building RESTful APIs with Node.js
            </Box>
            </Box>
               
            </Link>

            <Link to="/skill" target="_blank" >
            <Box style={{borderRadius:'15px'}} className={style.imag} >
                        <img src="https://image.pngaaa.com/897/2507897-middle.png" width="55px" className={style.img}/>
                        <Box  color='white' margin='auto'   className={style.skillTxt}>
                        <h1 style={{margin:'10px 0', fontSize:'25px'}}>React js</h1>
                            React is a free and open-source front-end JavaScript library for building user interfaces based on Component
                        </Box>
                </Box>
                
            </Link>
            </Box>
        </Box>
    )
}
export default HomeSkills