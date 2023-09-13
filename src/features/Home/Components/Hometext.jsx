import { Typography } from '@mui/material'
import { Bounce, Fade } from 'react-awesome-reveal';

export function Hometext() {
    return (
        <>
            <Fade duration={1500}>
                <Typography sx={{ color: "primary.main", textAlign: "center", fontSize:"2em"}} display="inline">
                    Hello, I&apos;m <Typography component="span" display="inline" sx={{  color: "secondary.main", fontSize:"1em", fontWeight: 550 }}>Dorian</Typography>
                </Typography>
            </Fade>
            <Bounce delay={500} duration={1000} left>
                <Typography sx={{ color: 'primary.main', textAlign: "center", fontSize: "1.1em" }}>
                    Looking for a 6 month internship abroad starting May 2024
                </Typography>
            </Bounce>
        </>
    )
}