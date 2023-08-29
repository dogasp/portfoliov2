import { Box, Container, Typography } from "@mui/material"
import { projectList } from "./Components/ProjectList"
import { useState } from "react"
import { Link } from "react-scroll";
import { Projectitem } from "./Components/Projectitem";


export function Projects() {

    const [projectFilterList, setProjectFilterList] = useState(projectList);
    const [projectFilter, setProjectFilter] = useState("All")

    function handleUpdrateFilter(filter) {
        const filteredList = projectList.filter((project) => (filter === "All") || project.category === filter)
        setProjectFilterList(filteredList)
        setProjectFilter(filter);
    }

    return (
        <Container sx={{
            marginTop: 10,
        }} maxWidth={false}>

            <Typography variant="h1" sx={{ textAlign: "center", my: 4 }}>Projects</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    to="Projects"
                    onClick={() => handleUpdrateFilter("All")}>
                    <Typography sx={{
                        px: 4,
                        bgcolor: projectFilter === "All" ? "secondary.main" : "white",
                        color: projectFilter === "All" ? "white" : "black",
                    }}>
                        All</Typography>
                </Link>
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    to="Projects"
                    sx={{ color: 'black' }}
                    onClick={() => handleUpdrateFilter("Personnal")}>
                    <Typography sx={{
                        px: 4,
                        bgcolor: projectFilter === "Personnal" ? "secondary.main" : "white",
                        color: projectFilter === "Personnal" ? "white" : "black",
                    }}>Personnal</Typography>
                </Link>
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    to="Projects"
                    sx={{ color: 'black' }}
                    onClick={() => handleUpdrateFilter("School")}>
                    <Typography sx={{
                        px: 4,
                        bgcolor: projectFilter === "School" ? "secondary.main" : "white",
                        color: projectFilter === "School" ? "white" : "black",
                    }}>School</Typography>
                </Link>
            </Box>

            {projectFilterList.map((project) => {
                return (
                    <Projectitem key={project.title} project={project}/>
                )
            })}
        </Container>
    )
}