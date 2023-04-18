
import style from "./HomeSkills.module.css"

import { Box, Button } from "@chakra-ui/react";
import Skill from "../../portfolio/Skill/Skill";
function HomeSkills(){


    return (
        <Box style={{background:"rgb(14,21,37)"}} id='homeskills'>


          <Box id={style.mypr}>
            <h1 id={style.h1}>My Technical Skills</h1>
          </Box>
        <Skill/>
        
        </Box>
    )
}
export default HomeSkills