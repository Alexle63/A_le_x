import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Link } from '@mui/material';

export default function Tile(props: { img: string, title: string, link: string}) {
    return (
        <div className='relative rounded-md p-0.5 bg-gradient-to-br from-orange-900 to-amber-300 h-min w-min grow group'>
            <Card elevation={0}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={props.img}
                    />
                </CardActionArea>
            </Card>
            <div className='absolute inset-0.5 rounded z-10 bg-gradient-to-t group-hover:flex hidden from-stone-950 to-transparent transition duration-500'>
                <Link href={props.link} className='absolute inset-0.5'>
                    <p className='absolute inset-4 bottom-3 flex text-2xl items-end bg-gradient-to-br from-orange-900 to-amber-400 to-75% inline-block text-transparent bg-clip-text font-extrabold '>{props.title}</p>
                </Link>
            </div>
        </div>
    );
}