import { AppBar, Container, Toolbar } from "@mui/material";

import { MobileMenu } from "./Components/MobileMenu";
import { DesktopMenu } from "./Components/DesktopMenu"

export function Header() {
    const pages = ["Home", "Profile", "Projects", "Contact"]

    return (
        <AppBar position="fixed" sx={{ bgcolor: "navbar.main" }}>
            <Container>
                <Toolbar sx={{ flexDirection: 'row-reverse' }}>
                    <MobileMenu pages={pages} />
                    <DesktopMenu pages={pages} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}