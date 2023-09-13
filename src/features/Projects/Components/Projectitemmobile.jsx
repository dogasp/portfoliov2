import { Card, Typography, CardMedia, Box, Button, Chip } from "@mui/material"

export function Projectitemmobile({project}){

    return (
        <Card sx={{width: {sm: 0.35, xs: 1}, m:3, p:3, position:"relative"}} elevation={15}>
            <Typography variant="h2" sx={{ color: "secondary.main", textAlign:"center", marginBottom: 3 }}>{project.title}</Typography>
            {/*<Typography sx={{ color: 'black', position:"absolute", right: "8%", top:"3%"}}>{project.date}</Typography>*/}
            <Box sx={{display:"flex", flexWrap:"wrap", mx:2}}>
                {project.tech.map((tech) => {
                    return (
                        <Chip key={tech} label={tech} size="small" sx={{mx:0.5, marginBottom: 1}}/>
                    )
                })}
            </Box>
            <CardMedia component="img" image={window.location.href + project.image} sx={{my: 1, border:"1px solid"}}/>
            <Typography sx={{ color: 'black', textAlign:"justify", my: 2, marginBottom: 4 }}>{project.text}</Typography>
            {project.link_text !== "" && <Button variant="contained" href={project.link} target="blank" sx={{ color: 'white', bgcolor:"secondary.main", position: "absolute", right: "5%", bottom: "3%"}}>
                {project.link_text}</Button>}
        </Card>
    )
}