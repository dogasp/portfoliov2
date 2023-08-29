import { Box, Container, Typography } from "@mui/material"
import { projectList } from "./Components/ProjectList"
import { useState } from "react"
import { Link } from "react-scroll";


export function Projects(){

    const [projectFilter, setProjectFilter] = useState(projectList);

    function handleUpdrateFilter(filter){
        const filteredList = projectList.filter((project) => (filter === "All") || project.category === filter)
        setProjectFilter(filteredList)
    }
    
    return (
        <Container sx={{
            marginTop: 10,
        }} maxWidth={false}>

            <Typography variant="h1" sx={{textAlign: "center"}}>Projects</Typography>
            <Box sx={{display: "flex", justifyContent:"center"}}>
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    to="Projects"
                    sx={{color:'black'}}
                    onClick={() => handleUpdrateFilter("All")}>
                        <Typography>All</Typography>
                </Link>
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    to="Projects"
                    sx={{color:'black'}}
                    onClick={() => handleUpdrateFilter("Personnal")}>
                        <Typography>Personnal</Typography>
                </Link>
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    to="Projects"
                    sx={{color:'black'}}
                    onClick={() => handleUpdrateFilter("School")}>
                        <Typography>School</Typography>
                </Link>
            </Box>

            {projectFilter.map((project) => {
                return (
                    <Typography key={project.title} sx={{color:'black'}}>{project.title}</Typography>
                )
            })}
        </Container>
    )
}