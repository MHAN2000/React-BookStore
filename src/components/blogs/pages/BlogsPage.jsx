import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Blog } from '../components/Blog'

export const BlogsPage = () => {
  return (
    <Container>
      <Typography variant='h4' sx={{ textAlign: 'center', padding: '1rem' }}>Our Latest News</Typography>
      <Grid container>
        <Grid items xs={4}>
          <Blog />
        </Grid>
        <Grid items xs={4}>
          <Blog />
        </Grid>
        <Grid items xs={4}>
          <Blog />
        </Grid>
      </Grid>
    </Container>
  )
}