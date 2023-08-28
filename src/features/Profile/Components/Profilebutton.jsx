import { Box, Button } from "@mui/material";


export function Profilebutton(){
    return (
        <Box sx={{my: 2}}>
            <Button variant="outlined" sx={{color: "secondary.main", mx:1}} size="small">
                    Download Resume
            </Button>
            <Button variant="contained" size="small" sx={{bgcolor:"secondary.main", color:"primary.main"}}>
                    Get in touch
            </Button>
        </Box>
    )
}