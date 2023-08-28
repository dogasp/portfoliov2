import { Container, Card, CardMedia, CardContent } from '@mui/material'
import { Profilecontent } from './Components/Profilecontent'
import { Profileicon } from './Components/Profileicon'
import { Profilebutton } from './Components/Profilebutton'


export function Profile() {
    return (
        <Container sx={{ height: { sm: '55vh', xs: '80vh' } }} maxWidth={'md'}>

            <Card
                elevation={15}
                sx={{
                    display: "flex",
                    alignItems: { sm: 'normal', xs: 'center' },
                    flexDirection: { sm: 'row', xs: 'column' },
                    mx: 4,
                    my: 2,
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

                <CardContent sx={{ marginBottom: { sm: 2, xs: 0 }, mx: { sm: 0, xs: 4 } }}>
                    <Profilecontent />
                    <Profileicon />
                    <Profilebutton />
                </CardContent>
            </Card>
        </Container>)
}