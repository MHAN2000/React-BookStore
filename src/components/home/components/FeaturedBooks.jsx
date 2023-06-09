import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Book } from './../../featured/components/Book';

export const FeaturedBooks = () => {
    const books = ['1', '2', '3', '4', '5', '6', '7', '8'];

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h2' sx={{ color: '#455050', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' }}>Featured Books</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                {
                    books.map(book => (
                        <Grid key={book} className='bookContainer' item xs={3}>
                            <Book />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}