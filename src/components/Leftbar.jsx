import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.item}>
                <Home className={classes.item} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.item} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.item} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.item} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.item} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
        </Container>
    );
};

export default Leftbar;