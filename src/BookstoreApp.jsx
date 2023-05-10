import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from './theme/theme';
import { BookstoreRouter } from './router/BookstoreRouter';

export const BookstoreApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BookstoreRouter />
        </ThemeProvider >
    )
}
