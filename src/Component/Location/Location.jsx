function Location(){
    return(
        <div>
            <h1 style={{color:"white",fontSize:"50px",marginTop:"50px"}}>Track My Location</h1>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.5744067838!2d77.57663511706197!3d23.000129611419943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c367258c5582d%3A0x41fc1c628c7549c4!2sObaidullaganj%2C%20Madhya%20Pradesh%20464993!5e0!3m2!1sen!2sin!4v1681296006494!5m2!1sen!2sin" 
               width="80%" 
               height="450" 
               style={{border:"0", margin:"50px auto"}}
               allowFullScreen="" 
               loading="lazy" 
              
               referrerPolicy="no-referrer-when-downgrade">

             </iframe>
        </div>
    )
}
export default Location