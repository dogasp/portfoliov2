import { Container, Card, CardMedia, CardContent } from '@mui/material'
import { Profilecontent } from './Components/Profilecontent'
import { Profileicon } from './Components/Profileicon'
import { Profilebutton } from './Components/Profilebutton'


export function Profile() {
    return (
        <Container sx={{ height: { sm: '40vh', xs: '83vh' } }} maxWidth={'md'}>

            <Card
                elevation={15}
                sx={{
                    display: "flex",
                    alignContent: "stretch",
                    alignItems: { sm: 'normal', xs: 'center' },
                    flexDirection: { sm: 'row', xs: 'column' },
                    mx: {sm: 4, xs: 1},
                    my: 10,
                    height: "inherit",
                }}>
                <CardMedia
                    component="img"
                    image={window.location.href + '/images/pp_dorian.png'}
                    sx={{
                        width: { sm: "40%", xs: "50%" },
                        objectFit: "contain",
                        m: {sm: 3, xs: 1},
                    }}
                />

                <CardContent sx={{ 
                    mx: { sm: 3, xs: 4 }, 
                    my: {sm: 2, xs:0},
                    p:0,
                    display: 'flex', 
                    flexGrow: "1",
                    height: 1,
                    alignItems: 'left',
                    flexDirection: 'column',
                    justifyContent: {xs:'space-around', sm:"center"}}}>
                    <Profilecontent />
                    <Profileicon />
                    <Profilebutton />
                </CardContent>
            </Card>
        </Container>)
}