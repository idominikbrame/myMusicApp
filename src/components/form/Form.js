import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import {FormControl, InputLabel, Input} from "@material-ui/core";
import "./formStyles.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Form(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="login-container">
          <div className="login-form">
          <FormControl className="form-control">
          <InputLabel htmlFor="my-input">Username</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl className="form-control">
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
          </div>
          <Button id="form-button" variant="contained" color="primary" onClick={() => props.setLoginStatus(true)} disableElevation>Login</Button>
        
      </div>
    </div>
  );
}

export default Form