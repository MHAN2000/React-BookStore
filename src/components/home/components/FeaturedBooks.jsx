import { Grid, Typography } from '@mui/material'
import React from 'react'

export const FeaturedBooks = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h2' sx={{ color: '#455050', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' }}>Featured Books</Typography>
            </Grid>
        </Grid>
    )
}