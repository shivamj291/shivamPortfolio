import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    AccordionIcon,
    useAccordionItemState,
    Button,
    Center,
  } from '@chakra-ui/react'
import style from "./Project.module.css"
import Navbar from '../Navbar/Navbar';
import PreContact from '../PreContact/PreContact';
import LowerNav from '../LowerNav/LowerNav';
function Project(){

  function HoverTrigger({ children }) {
    const { onOpen } = useAccordionItemState();
    return <div onMouseEnter={() => onOpen()}>{children}</div>;
  }

    return (
        <div id={style.Project}>
          
       
          <h1 id={style.heading}>My Project</h1>

          <p>In our Institue, our Institute Schedules construct week after every unit for pratice the thing which we learnt in the that particular unit. they provides us team, project and timing. we had to complete the project at the given time.I also participate in the construct week and made some collaberative project. here some are followings.</p>
           
           <Accordion allowToggle>
  <AccordionItem className={style.Accord} margin='30px auto' background='pink' boxShadow='0 0 10px black'>
    <h2>
    <AccordionButton width='100%' margin='auto' background='pink'border='none'> 
     
      <Box as="span" flex='1' textAlign='left' background='pink' fontSize='20px'  className={style.live}>
          <span className={style.innerSpan} style={{display:'flex' ,justifyContent:'space-between',padding:"15px 40px",fontWeight:"700"}}>   <p>lovoda</p>
          <Button height='35px' margin='auto 0'>Go Live</Button></span>
        
        </Box>
    
        
  
        </AccordionButton>
    </h2>
    <AccordionPanel pb={4} width='90%' padding='30px' margin='-40px auto auto auto' background='pink' >
      <img src="lovoda.gif" width='100%' style={{height:"250px"}}/>
      <Box className={style.protext}>
                            <h1>Lovoda</h1>
                            <p>LOVODA® Accessories</p>
                            <p> Jewelry/watches</p>
                            <p>We complete you ♥️ Stunning accessories styled for you.</p>
                            Tech-Stack - HTML | CSS |Javascript<br/>
                            <a href="https://comfy-speculoos-0dfe32.netlify.app/">Check from here</a><br/>
                            <a href="https://github.com/shivamj291/Project_Lovoda">Git Link</a>
      
      </Box>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem  className={style.Accord} margin='30px auto' background='pink' boxShadow='0 0 10px black'>
    <h2>
      <AccordionButton width='100%' margin='auto' background='pink'border='none'> 
        <Box as="span" flex='1' textAlign='left' fontSize='20px'background='pink' className={style.live}>
          <span className={style.innerSpan} >   <p>IndiaMart</p>
           <Button height='35px' margin='auto 0'>Go Live</Button></span>
        
        </Box>
    
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} width='90%' padding='30px' background='pink'  margin='-20px auto'>
      <img src="indiamartAnim.gif" width='100%' style={{height:"250px"}}/>
          
   
                
      <Box className={style.protext} >
                        <h1>Indiamart</h1>
                        <p>We connect Buyers & Sellers</p>
                        <p> End all your business worries with IndiaMART</p>
                        <p> IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
                        Tech-Stack - HTML,CSS,JAVA-SCRIPT,REST API,LOCAL STORAGE<br/>
                        <a href="https://astonishing-smakager-1c8cc9.netlify.app/">Check from here</a><br/>
                        <a href="https://github.com/shivamj291/IndiaMart-Clone">Git Link</a>
                        
      
      </Box>
    </AccordionPanel>





  </AccordionItem>

     
  <AccordionItem   className={style.Accord} margin='10px auto' background='pink' boxShadow='0 0 10px black'>
    <h2>
      <AccordionButton width='100%' margin='auto' background='pink'border='none'> 
        <Box as="span" flex='1' textAlign='left' fontSize='20px'background='pink' className={style.live}>
          <span className={style.innerSpan}>   <p>Acko</p>
           <Button height='35px' margin='auto 0'>Go Live</Button></span>
        
        </Box>
       
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} width='90%' padding='30px' background='pink'  margin='-20px auto'>
      <img src="acko.png" width='100%' style={{height:"250px"}}/>
      <Box className={style.protext} >
                        <h1>Acko</h1>
                        <p>We're easy, effortless and 100% digital.</p>
                        
                        <p>  ACKO is an IRDAI licensed General Insurance company.</p>
                        <p>We offer Car, Two-Wheeler, Taxi and Health Insurance plans</p>
                        Tech-Stack - HTML,CSS,JAVA-SCRIPT,REACT,REDUX,CHAKRA UI<br/>

                        <a href="https://acko-team.netlify.app/">Git Link</a>
                        
      
      </Box>
    </AccordionPanel>

 


    </AccordionItem>
 
</Accordion>


        </div>
    )
}
export default Project