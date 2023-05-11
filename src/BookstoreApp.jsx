import React from 'react'
import { theme } from './theme/theme';
import { BookstoreRouter } from './router/BookstoreRouter';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from "@mui/material/CssBaseline";

export const BookstoreApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BookstoreRouter />
        </ThemeProvider >
    )
}
