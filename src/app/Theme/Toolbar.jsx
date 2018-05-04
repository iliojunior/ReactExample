import React, { Component } from 'react'
import {
  Toolbar as MuiToolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar'

class Toolbar extends Component {
  render() {
    return (
      <MuiToolbar>
        <ToolbarGroup firstChild={true} color="teal500">

        </ToolbarGroup>
      </MuiToolbar>
    )
  }
}

export default Toolbar
