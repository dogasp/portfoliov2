import { Container, Divider, Typography } from "@mui/material";
import { ContactForm } from "./Components/ContactForm";
import { Slide } from "react-awesome-reveal";

export function Contact(){

    return (
        <Container sx={{
            marginTop: 10,
            height: {sm: "70vh", xs:"95vh"},
            bgcolor: "background.main",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }} maxWidth={false}>
            <Slide direction="up" width="100%" style={{display:"flex", justifyContent: "center"}} triggerOnce>
                <Typography variant="h1" sx={{ m: 4, position:'relative', top: 10, color:"primary.main"}}>
                    Contact me
                </Typography>
                <Divider sx={{bgcolor:"primary.main", width: 0.15, position:"relative", top: -14}}/>

                <ContactForm />
            </Slide>
        </Container>
    )
}