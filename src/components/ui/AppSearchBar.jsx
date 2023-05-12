import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Favorite, MenuBook, Person, ShoppingCart } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { NavLink } from 'react-router-dom';

export const AppSearchBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <NavLink to="/">
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <MenuBook sx={{ color: '#27ae61' }} />
                            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, textDecoration: 'none', textTransform: 'uppercase', color: '#676a62' }}>
                                The lord of the books
                            </Typography>
                        </Box>
                    </NavLink>
                    <TextField placeholder="Search here..." size="small" sx={{ width: "60%" }} InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}></TextField>
                    <Box sx={{ display: 'flex' }}>
                        <IconButton>
                            <Favorite sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                        <IconButton>
                            <ShoppingCart sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                        <IconButton>
                            <Person sx={{ fontSize: '1.5rem' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}