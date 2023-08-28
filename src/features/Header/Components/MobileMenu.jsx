
import { Box, Typography, IconButton, Menu, MenuItem, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-scroll";


export function MobileMenu({ pages }) {
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{color: "primary.main"}}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                }}>
                {pages.map((page) => (
                    <MenuItem key={page} >
                        <Link
                            activeClass="active"
                            onClick={handleCloseNavMenu}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-56}
                            to={page}>
                            <Typography textAlign="center" sx={{color: "black"}}>{page}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}