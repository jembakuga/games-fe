import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export interface ChildProps {
    image: string;
    title: string;
    body: string;
    btn1Label: string;
    btn2Label: string;
    link1: string;
    link2: string;
    hasButton2: boolean
}

export default function ActionAreaCard({ image, title, body, btn1Label, btn2Label, link1, link2, hasButton2 }: ChildProps) {
    const [btn2Show, setBtn2Show] = useState(true);
    useEffect(() => {
        console.log({hasButton2})
    }, []);



    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={"./fight.jpg"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{btn1Label}</Button>
                <Button size="small">{btn2Label}</Button>
            </CardActions>
        </Card>
    );
}
