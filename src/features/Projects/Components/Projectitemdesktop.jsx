import { Card, Typography, CardMedia, Box, Fade, Button, Chip } from "@mui/material"
import { useState } from "react"

export function Projectitemdesktop({project}){

    const [reveal, setReveal] = useState(false);

    return (
        <Card sx={{width: 0.2, m:3, position:"relative"}} onMouseEnter={() => setReveal(true)} onMouseLeave={() => setReveal(false)} elevation={15}>
            <Fade in={!reveal} timeout={500}>
                <CardMedia component="img" image={window.location.href + project.image}/>
            </Fade>
            <Fade in={reveal} timeout={500}>
                <Box sx={{position:"absolute", top: 0}} width="100%" height="100%">
                    <Typography variant="h2" sx={{ color: "secondary.main", textAlign:"center", my: 2, fontSize: {lg: "1em", xl:"1.6em"} }}>{project.title}</Typography>
                    <Box sx={{display:"flex", flexWrap:"wrap", mx:2}}>
                        {project.tech.map((tech) => {
                            return (
                                <Chip key={tech} label={tech} size="small" sx={{mx:0.5, marginBottom: 1, fontSize:{lg: "0.7em", xl:"1em"}}}/>
                            )
                        })}
                    </Box>
                    <Typography sx={{ color: 'black', mx: 3, textAlign:"justify", fontSize:{lg: "0.8em", xl:"1em"}, lineHeight: {xl:"normal", lg:"1em"} }}>{project.text}</Typography>
                    <Typography sx={{ color: 'black', position: "absolute", left:"6%", bottom: "7%"}}>{project.date}</Typography>
                    {project.link_text !== "" && <Button variant="contained" href={project.link} target="blank" sx={{ color: 'white', bgcolor:"secondary.main", position: "absolute", right:"6%", bottom: "5%" }}>
                        {project.link_text}</Button>}
                </Box>
            </Fade>
        </Card>
    )
}