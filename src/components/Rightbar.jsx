import { Avatar, Container, Divider, ImageList, ImageListItem, Link, ListItemSecondaryAction, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555"
    },
    link: {
        marginRight: theme.spacing(2),
        color:"#555",
        fontSize: 16,
    }
}));

const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>Online Friends</Typography>
            <AvatarGroup max={6} style={{ marginBottom: 20 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/7.jpg" />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format&dpr=2" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format&dpr=2" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format&dpr=2" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format&dpr=2" alt="" />
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title} gutterBottom>
                Categories
            </Typography>
            <Link href="#" className={classes.link} variant="body2">
                Sport
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Food
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Music
            </Link>
            <Divider flexItem style={{ marginBottom: 5 }}/>
            <Link href="#" className={classes.link} variant="body2">
                Movies
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Science
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Life
            </Link>
        </Container>
    );
};

export default Rightbar;