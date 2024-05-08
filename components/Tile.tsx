import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Tile(props: { height: number, title: string }) {
    return (
        <div className='rounded-md p-0.5 bg-gradient-to-br from-orange-900 to-amber-300'>
            <Card sx={{ maxWidth: props.height }} elevation={0}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="/static/Pyrogram.jpg"
                    />
                    <CardContent className='bg-stone-800 text-orange-300 p-2 px-4 font-medium'>
                        <p>{props.title}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}