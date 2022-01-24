import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
    },
}));

const Post = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media} 
                    image="https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    title="My Post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        My First Post
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                        consectetur earum est repudiandae aliquam neque molestiae,
                        paraesentium placeat unde illo? Recusandae sapiente qui eligendi
                        repellat, accusantium nobis obcaecati culpa magni.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                        consectetur earum est repudiandae aliquam neque molestiae,
                        paraesentium placeat unde illo? Recusandae sapiente qui eligendi
                        repellat, accusantium nobis obcaecati culpa magni.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Post;