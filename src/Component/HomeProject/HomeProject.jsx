
import style from "./HomeProject.module.css"
import { Box, Button } from "@chakra-ui/react";
import Project from "../../portfolio/Project/Project";
function HomeProject(){

    return (
        <Box style={{background:"rgb(14,21,37)"}} id='homeproject' className={style.hompro}>
          <Box id={style.mypr} style={{fontSize:'25px'}}>
            <h1 id={style.h1}>My Latest Project</h1>
          </Box>
            <Project/>
        </Box>
    )
}
export default HomeProject