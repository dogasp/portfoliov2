import { Box, Container, Typography } from "@mui/material"
import { projectList } from "./Components/ProjectList"
import { useEffect, useState } from "react"
import { Link } from "react-scroll";
import { Projectitemmobile } from "./Components/Projectitemmobile";
import { Projectitemdesktop } from "./Components/Projectitemdesktop";

export function Projects() {

    const [projectFilterList, setProjectFilterList] = useState(projectList)
    const [projectFilter, setProjectFilter] = useState("All")
    const [width, setWidth] = useState(window.innerWidth)

    function handleUpdrateFilter(filter) {
        const filteredList = projectList.filter((project) => (filter === "All") || project.category === filter)
        setProjectFilterList(filteredList)
        setProjectFilter(filter)
    }

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <Container sx={{
            marginTop: 15,
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
                        fontSize: '20px',
                        borderRadius: "17px"
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
                        fontSize: '20px',
                        borderRadius: "17px"
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
                        fontSize: '20px',
                        borderRadius: "17px"
                    }}>School</Typography>
                </Link>
            </Box>
            <Box direction="up" cascade triggerOnce sx={{display:"flex", flexDirection:"row", m:{lg: 8, xs:2, sm:6}, justifyContent:"center", flexWrap:"wrap"}}>
                {projectFilterList.map((project) => {
                    if (width > 1200){
                        return  <Projectitemdesktop project={project} key={project.title}/>
                    } else {
                        return <Projectitemmobile project={project} key={project.title}/>
                    }
                })}
            </Box>
        </Container>
    )
}