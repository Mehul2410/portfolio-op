import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./css/Card.css";
import { CardMedia } from "@material-ui/core";

const Cards = ({ name, repos, image, link }) => {
  return (
    <Card className="card">
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
      <CardMedia className="card__image">
        <img src={image} />
      </CardMedia>

      <CardActions className="card__buttons">
        <Button size="small">
          <a href={repos}>GITHUB</a>
        </Button>
        <Button size="small">
          <a href={link}>Live</a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
