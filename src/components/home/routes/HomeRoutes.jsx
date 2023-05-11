import React from 'react'
import { AppSearchBar } from '../../ui/AppSearchBar'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AppNavBar } from '../../ui/AppNavBar'

export const HomeRoutes = () => {
  return (
    <>
        <AppSearchBar />
        <AppNavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  )
}
