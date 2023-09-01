import { Card, Typography, CardMedia, Box, Fade, Button } from "@mui/material"
import { useState } from "react"

export function Projectitem({project}){

    const [reveal, setReveal] = useState(false);

    return (
        <Card sx={{width: 0.15, m:4, position:"relative"}} onMouseEnter={() => setReveal(true)} onMouseLeave={() => setReveal(false)} elevation={15}>
            <Fade in={!reveal} timeout={500}>
                <CardMedia component="img" image={project.image}/>
            </Fade>
            <Fade in={reveal} timeout={500}>
                <Box sx={{position:"absolute", top: 0}} width="100%" height="100%">
                    <Typography variant="h1" sx={{ color: "secondary.main", textAlign:"center", my: 2 }}>{project.title}</Typography>
                    <Typography sx={{ color: 'black', mx: 2, textAlign:"justify" }}>{project.text}</Typography>
                    <Typography sx={{ color: 'black' }}>{project.date}</Typography>
                    <Button variant="contained" href={project.link} target="blank" sx={{ color: 'white', bgcolor:"secondary.main" }}>
                        {project.link_text}</Button>
                </Box>
            </Fade>
        </Card>
    )
}