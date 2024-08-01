import { promises as fs } from 'fs';
import Tile from '@/components/Tile'
import { Grid } from '@mui/material'
import React from 'react'

export default async function Projects() {
    const reunix = await JSON.parse(await fs.readFile('projectJSONs\\reunix.json', 'utf8'));
    const bit = await JSON.parse(await fs.readFile('projectJSONs\\a-bit-of-adventure.json', 'utf8'));
    const rice = await JSON.parse(await fs.readFile('projectJSONs\\what-goes-into-a-bowl-of-rice.json', 'utf8'));
    const dining = await JSON.parse(await fs.readFile('projectJSONs\\swarthmore-campus-dining-browser-extension.json', 'utf8'));
    const swatswap = await JSON.parse(await fs.readFile('projectJSONs\\swat-swap.json', 'utf8'));
    const tickflow = await JSON.parse(await fs.readFile('projectJSONs\\tickflow.json', 'utf8'));
    const projects = [
        swatswap,
        dining,
        tickflow,
        reunix,
        bit,
        rice,
    ]

    return (
        <Grid
            p={4}
            container
            spacing={6}
            columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }
            }>
            {(projects.map(project =>
                <Grid item key={project.title} xs={1} className='flex'>
                    <Tile img={project.img} title={project.title} link={'/projects/' + project.linkTitle} />
                </Grid>
            ))}
        </Grid>
    )
}
