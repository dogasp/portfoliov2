import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-scroll";

export function Profilebutton(){

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `Resume_Dorian_Gaspar.pdf`;
        link.href = window.location.href + '/pdf/resume.pdf';
        link.click();
        link.remove();
      };
    
    return (
        <Box sx={{my: 2, textAlign: {sm:"left", xs:"center"}}}>
            <Button onClick={onDownload} variant="outlined" sx={{color: "secondary.main", mx:1, my:{sm:0 , xs:1}}} size="small">
                    Download Resume
            </Button>
            <Button variant="contained" size="small" sx={{bgcolor:"secondary.main", color:"primary.main", mx:1}}>
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    to="Contact"
                    sx={{textDecoration:"none"}}>
                    <Typography>Get in touch</Typography>
                </Link>
            </Button>
        </Box>
    )
}