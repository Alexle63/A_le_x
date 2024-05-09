import Tile from '@/components/Tile'
import { Grid } from '@mui/material'
import React from 'react'

export default function clothing() {
    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
            <Grid item xs={1} className='flex'>
                <Tile img='/static/pyrogram.jpg' title='Clothing 1' link='/software/test' />
            </Grid>
        </Grid>
    )
}
