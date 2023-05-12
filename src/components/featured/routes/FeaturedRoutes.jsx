import React from 'react'
import { AppSearchBar } from '../../ui/AppSearchBar'
import { AppNavBar } from '../../ui/AppNavBar'
import { Route, Routes } from 'react-router-dom'
import { FeaturedPage } from '../pages/FeaturedPage'

export const FeaturedRoutes = () => {
    return (
        <>
            <AppSearchBar />
            <AppNavBar />
            <Routes>
                <Route path='/' element={<FeaturedPage />} />
            </Routes>
        </>
    )
}
