import { Container } from '@mui/material'
import { Hometext } from './Components/Hometext'
import {Homeparticles } from './Components/Homeparticles'

export function Home() {
    return (
        <Container sx={{
            height: '80vh',
            bgcolor: "background.main",
            alignContent: "center",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Homeparticles />
            <Hometext />
            
        </Container>
    )
}