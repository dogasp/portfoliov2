import { Typography, Box } from '@mui/material'
import { Link } from 'react-scroll'

export function Profilecontent() {
    return (
        <Box textAlign={'justify'} sx={{marginBottom: 3}}>
            <Typography variant="h2" sx={{ m: 1, marginBottom: 2, color: "secondary.main" }}>Dorian GASPAR</Typography>
            <Typography variant='caption' style={{ display: "inline-block" }}>Committed and curious, I am developing my skills at CY-Tech : a School specialized in Computer Science.</Typography>

            <Typography variant='caption' style={{ display: "inline-block" }}>I acquired a lot of knowledge on my own by carrying out multiple projects.</Typography>

            <Typography variant='caption' style={{ display: "inline-block" }}>All of them can been seen on my <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                to={"Projects"}><Typography display="inline" variant='caption' sx={{ color: "secondary.main", fontWeight:600 }}>Projects</Typography></Link> section.</Typography>

        </Box>
    )
}