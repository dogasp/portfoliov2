import { Button, Card, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export function ContactForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    function submitForm(){
      emailjs.send("service_buweiul", "template_lf4frtk", {name: name, email:email, content:content}, "ATt6FoCc1LXMgO1c9")
      .then(() => {
        setName("")
        setEmail("")
        setContent("")
      }, (error) => {
        console.error(error)
      })
    }

    const themeForm = createTheme({
        palette: {
          primary: {
            main: "#4b85e3",
          },
        }
    });

    return (
        <Card sx={{width: {xs:"60%", lg:"30%"}, minHeight:{sm:0, xs:"40vh"}, bgcolor:"primary.main", marginTop:4, p:6, position:"relative"}}>
            <Typography variant="h3" sx={{color:"secondary.main", textAlign:"center", mx:2}}>
                Have a question or want to work together?
            </Typography>
          <ThemeProvider theme={themeForm}>
            <TextField 
                variant="standard"
                value={name}
                label="Your name"
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{my:1.5}}/>
            <TextField 
                variant="standard"
                value={email}
                label="Your email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth/>
            <TextField 
                variant="standard"
                value={content}
                label="Your message"
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                multiline
                minRows={4}
                sx={{my:4}}/>
          </ThemeProvider>

          <Button variant="contained" onClick={() => submitForm()} sx={{bgcolor:"secondary.main", color:"primary.main", mx:2, position:"absolute", right:"10%", bottom: "5%"}}>
                  Submit
          </Button>
            
        </Card>
    )
}