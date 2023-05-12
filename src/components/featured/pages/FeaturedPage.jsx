import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Book } from '../components/Book'

export const FeaturedPage = () => {
    const books = ['1', '2', '3', '4', '5', '6', '7', '8'];
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ textAlign: 'center', padding: '1rem' }}>
                        Best Sellers
                    </Typography>
                </Grid>
                {
                    books.map(book => (
                        <Grid key={book} className='bookContainer' item xs={3}>
                            <Book />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
