import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

function Nav() {
  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Music App</Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default Nav