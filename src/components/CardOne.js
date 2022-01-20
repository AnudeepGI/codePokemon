import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    marginBottom: "2px",
  },
});

export default function CardOne(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img alt={props.data.item.name} src={props.data.item.img}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.item.name}
          </Typography>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              Num : {props.data.item.num}
            </Typography>
            <Typography variant="body2">
              Type: {props.data.item.type.join(", ")}
            </Typography>
            <Typography variant="body2">
              Weaknesses: {props.data.item.weaknesses.join(", ")}
            </Typography>
            <Typography variant="body2">
              Weakness: {props.data.item.type.join(", ")}
            </Typography>
            <Typography variant="body2">
              Height: {props.data.item.height}
            </Typography>
            <Typography variant="body2">
              Weight: {props.data.item.weight}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
