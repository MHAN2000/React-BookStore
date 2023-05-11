import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export const Blog = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://media.npr.org/assets/img/2023/03/20/copy-of-lk_books_harlan-158_wide-aba40cd92c03a1d9c7674c39ae62430435456461-s1400-c100.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Blog Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam praesentium numquam molestias. Dolor nihil dignissimos cumque ratione. Mollitia, porro sapiente.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">Read More</Button>
            </CardActions>
        </Card>
    )
}
