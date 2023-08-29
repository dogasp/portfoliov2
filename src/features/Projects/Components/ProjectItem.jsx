import { Typography } from "@mui/material"

export function Projectitem({project}){
    return (
        <Typography sx={{ color: 'black' }}>{project.title}</Typography>
    )
}