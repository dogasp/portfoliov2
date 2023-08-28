import { Container, Card, CardMedia, CardContent } from '@mui/material'
import { Profilecontent } from './Components/Profilecontent'
import { Profileicon } from './Components/ProfileIcon'


export function Profile() {
    return (
        <Container sx={{ height: { sm: '40vh', xs: '80vh' } }}>

            <Card
                elevation='15'
                sx={{
                    display: "flex",
                    alignItems: { sm: 'normal', xs: 'center' },
                    flexDirection: { sm: 'row', xs: 'column' },
                    marginTop: 4,
                    height: "inherit"
                }}>
                <CardMedia
                    component="img"
                    image='/src/assets/pp_dorian.png'
                    sx={{
                        width: { sm: "40%", xs: "50%" },
                        objectFit: "contain",
                        m: 2,
                    }}
                />

                <CardContent sx={{ my: { sm: 4, xs: 0 }, mx: { sm: 0, xs: 4 } }}>
                    <Profilecontent />
                    <Profileicon />
                </CardContent>
            </Card>
        </Container>)
}