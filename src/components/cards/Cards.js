import React from "react"

import "./cardStyles.css"

import Card from "@material-ui/core/Card"
import {makeStyles, useTheme } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Switch from "@material-ui/core/Switch"
import Slider from "@material-ui/core/Slider"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


function valuetext(value) {
  return `${value}°C`
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


function Cards(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className="cards">

      <Card className={classes.root}>
      <div className={classes.details}>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause"  >
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>


        <Card className="single-card" variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">
              Online Mode
            </Typography>
            <Typography variant="body2" component="p">
              Is this application connected to the internet?
            </Typography>
            <Switch name="checkedA" onChange={props.toggleOnlineMode} inputProps={{ "aria-label": "secondary checkbox" }} />
          </CardContent>
          <CardActions></CardActions>
        </Card>




        <Card className="single-card" variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">
              Master Volume
            </Typography>
            <Typography variant="body2" component="p">
              Overrides all other sound settings in this application
            </Typography>
            <Slider defaultValue={10} getAriaValueText={valuetext} onChange={(e, val) => props.setMasterVolume(val)} aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={5} marks min={0} max={100} />
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card className="single-card" variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">
              Music Quality
            </Typography>
            <Typography variant="body2" component="p">
              Control music connection for best results
            </Typography>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Normal</InputLabel>
              <Select className="select" onChange={e => props.setSoundQuality(e.target.value)} labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions></CardActions>
        </Card>         
      </div>

      
    </>
  )
}

export default Cards