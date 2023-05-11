import { Container, Typography } from '@mui/material'
import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { FeaturedBooks } from '../components/FeaturedBooks'

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <FeaturesSection />
        <FeaturedBooks />
      </Container>
    </>
  )
}
