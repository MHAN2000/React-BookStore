import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { HeroBook } from './HeroBook';

export const HeroSection = () => {
    const heroDescription = useRef(null);
    useEffect(() => {
        const typed = new Typed(heroDescription.current, {
            strings: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt amet, architecto'],
            typeSpeed: 25,
            showCursor: false,
        });
        return () => typed.destroy()
    }, [])
    return (
        <Paper elevation={5} sx={{ backgroundColor: '#ebebeb', height: '25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} square>
            <Grid container sx={{ padding: '0 5rem' }}>
                <Grid item xs={6}>
                    <Typography variant='h2' sx={{ fontWeight: '400', color: '#455050' }}>Upto 75% Off</Typography>
                    <Typography sx={{ height: '4rem' }} ref={heroDescription}></Typography>
                    <Button variant='contained' sx={{ display: 'block' }}>Shop Now</Button>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                        <HeroBook />
                        <HeroBook />
                        <HeroBook />
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}
