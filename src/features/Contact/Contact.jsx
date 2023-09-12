import { Container, Divider, Typography } from "@mui/material";
import { ContactForm } from "./Components/ContactForm";

export function Contact(){

    return (
        <Container sx={{
            marginTop: 10,
            height: "70vh",
            bgcolor: "background.main",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }} maxWidth={false}>

            <Typography variant="h1" sx={{ m: 4, position:'relative', top: 10, color:"primary.main"}}>
                Contact me
            </Typography>
            <Divider sx={{bgcolor:"primary.main", width: 0.15, position:"relative", top: -14}}/>

            <ContactForm />
        </Container>
    )
}