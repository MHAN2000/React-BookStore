import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Blog } from '../components/Blog'
import { ArrowForward, LocationOn, Mail, Phone } from '@mui/icons-material'

export const BlogsPage = () => {
  return (
    <>
      <Container>
        <Typography variant='h4' sx={{ textAlign: 'center', padding: '1rem' }}>Our Latest News</Typography>
        <Grid container>
          <Grid item xs={4}>
            <Blog />
          </Grid>
          <Grid item xs={4}>
            <Blog />
          </Grid>
          <Grid item xs={4}>
            <Blog />
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12} sx={{
          paddingTop: 8
        }}>
          <img style={{ width: '100%', objectFit: 'cover', height: '18rem', objectPosition: 'top' }} src="https://zmot.auto/wp-content/uploads/2017/04/Reading-Banner.jpg" />
        </Grid>
      </Grid>
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant='h4' sx={{ marginTop: 3, marginBottom: 3 }}>Our locations</Typography>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <LocationOn sx={{ color: 'primary.main' }} />
              <Typography>Location 1, Example</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <LocationOn sx={{ color: 'primary.main' }} />
              <Typography>Location 2, Example</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <LocationOn sx={{ color: 'primary.main' }} />
              <Typography>Location 3, Example</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <LocationOn sx={{ color: 'primary.main' }} />
              <Typography>Location 4, Example</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <LocationOn sx={{ color: 'primary.main' }} />
              <Typography>Location 5, Example</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h4' sx={{ marginTop: 3, marginBottom: 3 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <ArrowForward sx={{ color: 'primary.main' }} />
              <Typography>Location 1, Example</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <ArrowForward sx={{ color: 'primary.main' }} />
              <Typography>Location 1, Example</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <ArrowForward sx={{ color: 'primary.main' }} />
              <Typography>Location 2, Example</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h4' sx={{ marginTop: 3, marginBottom: 3 }}>Get in touch</Typography>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <Mail sx={{ color: 'primary.main' }} />
              <Typography>mail1@example.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <Mail sx={{ color: 'primary.main' }} />
              <Typography>mail2@example.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <Phone sx={{ color: 'primary.main' }} />
              <Typography>+52 866232564</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, margin: '10px 0' }}>
              <Phone sx={{ color: 'primary.main' }} />
              <Typography>+55 844656898</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}