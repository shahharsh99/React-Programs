import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Common from '../Common';
import { useHistory } from 'react-router-dom';
import { AccessTime } from '@material-ui/icons';

const useStyles = makeStyles({
root: {
    maxWidth: 400,
},
media: {
    height: 180,
},
});

export default function MediaCard() {
const classes = useStyles();
const history = useHistory();
return (
    <Common>
        <center>
            <u><h1>List of Tasks</h1></u>
            <br/>
        <div className="row">
            <div className="col">
                <Card className={classes.root}>
                    <CardActionArea onClick={() => history.push("/calculator")}>
                        <CardMedia
                        className={classes.media}
                        image="https://raw.githubusercontent.com/kml1990/react-calculator/master/src/react-calculator.png"
                        title="Calculator"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Calculator
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica */}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <AccessTime/>
                        &nbsp;
                        09 April, 2021
                    </CardActions>
                </Card>
            </div>
            <div className="col">
                <Card className={classes.root}>
                    <CardActionArea onClick = {() => history.push("/pascal-pyramid")}>
                        <CardMedia
                        className={classes.media}
                        image="https://res.cloudinary.com/practicaldev/image/fetch/s--WQWBZdNR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/j5g94tika3ej65xu6coy.png"
                        title="Pascal's Pyramid"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Pascal's Pyramid
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica */}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <AccessTime/>
                        &nbsp;
                        09 April, 2021
                    </CardActions>
                </Card>
            </div>
            <div className="col">
                <Card className={classes.root}>
                    <CardActionArea onClick = {() => history.push("/fibonacci-series")}>
                        <CardMedia
                        className={classes.media}
                        image="https://www.mathsisfun.com/numbers/images/fibonacci-spiral.svg"
                        title="Fibonacci Series"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Fibonacci Series
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica */}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <AccessTime/>
                        &nbsp;
                        09 April, 2021
                    </CardActions>
                </Card>
            </div>
        </div>
        </center>
    </Common>    
);
}
