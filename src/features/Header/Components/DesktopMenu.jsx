import { Box, Typography, Button } from '@mui/material';
import { Link } from "react-scroll";

export function DesktopMenu({ pages }) {
    return (
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    sx={{ mx: 2, color: 'primary.main', display: 'block' }}
                    key={page}>
                    <Link
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-64}
                        to={page}>
                        <Typography>{page}</Typography>
                    </Link>
                </Button>
            ))}
        </Box>
    )
}