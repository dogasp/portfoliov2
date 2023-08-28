import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material'
import { IconButton, Box } from '@mui/material'

export function Profileicon() {
    return (
        <Box sx={{my:2}}>
            <IconButton href='https://www.linkedin.com/in/dorian-gaspar/' target='blank' size="small" 
            sx={{boxShadow:3, m: 1, maxWidth: '30px', maxHeight:'30px', p:2}}>
                <LinkedIn sx={{color: "#0E76A8"}}/>
            </IconButton>
            <IconButton href='https://github.com/dogasp' target='blank' size="small" 
            sx={{boxShadow:3, m: 1, maxWidth: '30px', maxHeight:'30px', p:2}}>
                <GitHub/>
            </IconButton>
            <IconButton href='mailto: dorian.gaspar@orange.fr' target='blank' size="small" 
            sx={{boxShadow:3, m: 1, maxWidth: '30px', maxHeight:'30px', p:2}}>
                <Email sx={{color:"#37a33e"}}/>
            </IconButton>
            <IconButton href='tel: +33652571995' target='blank' size="small" 
            sx={{boxShadow:3, m: 1, maxWidth: '30px', maxHeight:'30px', p:2}}>
                <Phone sx={{color: "#f26a63"}}/>
            </IconButton>
        </Box>
    )
}