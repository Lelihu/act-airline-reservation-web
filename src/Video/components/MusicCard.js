import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from "@material-ui/core";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const styles = theme => ({
  card: {
    //display: "flex"
  },
  details: {
   display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 600
  },
});

function MusicCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.data.artist}
          </Typography>
          <p align="center">
          <iframe width={600} height={330}
              id="video"
                  position="center"
           //width="100%"
           //heigh="100%"
            src={"https://www.youtube.com/embed/B7DMCUhDaao" }
            frameBorder="0"
            allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen

          />
          </p>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="/img2.jpg"
        title=""
      />
    </Card>
  );
}

MusicCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(MusicCard);
