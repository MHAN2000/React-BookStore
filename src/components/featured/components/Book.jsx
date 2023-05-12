import { Star } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

export const Book = () => {
    return (
        <Box sx={{ padding: '1rem', boxShadow: 4, display: 'flex', gap: 2 }}>
            <img className='book' src='https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg' />
            <Box>
                <Typography sx={{ fontWeight: '700' }}>The Lord of the Rings</Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '1.5rem' }}>$15.99</Typography>
                <Star sx={{ color: 'primary.main' }} />
                <Star sx={{ color: 'primary.main' }} />
                <Star sx={{ color: 'primary.main' }} />
                <Star sx={{ color: 'primary.main' }} />
                <Star sx={{ color: 'primary.main' }} />
            </Box>
        </Box>
    )
}
