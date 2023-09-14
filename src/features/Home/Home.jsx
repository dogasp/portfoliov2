import { Container } from '@mui/material'
import { Hometext } from './Components/Hometext'
import {Homeparticles } from './Components/Homeparticles'

export function Home() {
    return (
        <Container sx={{
            height: '95vh',
            bgcolor: "background.main",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }} maxWidth={false}>
            <Homeparticles />
            <Hometext />
        </Container>
    )
}