import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppNavBar = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, padding: 1, backgroundColor: '#27ae61' }}>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/" className="nav-link">Featured</NavLink>
            <NavLink to="/" className="nav-link">Arrivals</NavLink>
            <NavLink to="/" className="nav-link">Reviews</NavLink>
            <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
        </Box>
    )
}
