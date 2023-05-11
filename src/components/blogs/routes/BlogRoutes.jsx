import React from 'react'
import { AppSearchBar } from '../../ui/AppSearchBar'
import { AppNavBar } from '../../ui/AppNavBar'
import { Route, Routes } from 'react-router-dom'
import { BlogsPage } from './../pages/BlogsPage';

export const BlogRoutes = () => {
    return (
        <>
            <AppSearchBar />
            <AppNavBar />
            <Routes>
                <Route path="/" element={<BlogsPage />} />
            </Routes>
        </>
    )
}
