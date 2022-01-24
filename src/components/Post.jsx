import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

const Post = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardMedia 
                    className={classes.media} 
                    image="https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    title="My Post"
                />
                <CardContent>
                    <Typography variant="h5">
                        My First Post
                    </Typography>
                    <Typography variant="body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                        consectetur earum est repudiandae aliquam neque molestiae,
                        paraesentium placeat unde illo? Recusandae sapiente qui eligendi
                        repellat, accusantium nobis obcaecati culpa magni.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Post;