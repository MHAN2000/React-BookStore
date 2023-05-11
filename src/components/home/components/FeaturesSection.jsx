import { HeadsetMic, LocalShipping, Lock, Replay } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const FeaturesSection = () => {
    return (
        <Grid container sx={{ padding: '4rem 0', display: 'flex', justifyContent: 'space-evenly' }}>
            <Grid item sx={3}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <LocalShipping sx={{ color: 'primary.main', fontSize: '4rem' }} />
                    <Box>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1.5rem' }}>Free Shipping</Typography>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1rem' }}>Order over $100</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item sx={3}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Lock sx={{ color: 'primary.main', fontSize: '4rem' }} />
                    <Box>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1.5rem' }}>Secure Payment</Typography>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1rem' }}>Order over $100</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item sx={3}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Replay sx={{ color: 'primary.main', fontSize: '4rem' }} />
                    <Box>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1.5rem' }}>Easy Returns</Typography>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1rem' }}>Order over $100</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item sx={3}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <HeadsetMic sx={{ color: 'primary.main', fontSize: '4rem' }} />
                    <Box>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1.5rem' }}>24/7 Support</Typography>
                        <Typography sx={{ fontWeight: '500', color: 'black', fontSize: '1rem' }}>Order over $100</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
