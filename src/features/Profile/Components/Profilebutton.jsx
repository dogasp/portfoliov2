import { Box, Button } from "@mui/material";

export function Profilebutton(){
    return (
        <Box sx={{my: 2, textAlign: {sm:"left", xs:"center"}}}>
            <Button variant="contained" size="small" sx={{bgcolor:"secondary.main", color:"primary.main", mx:1}}>
                    Get in touch
            </Button>
            <Button variant="outlined" sx={{color: "secondary.main", mx:1, my:{sm:0 , xs:1}}} size="small">
                    Download Resume
            </Button>
        </Box>
    )
}