import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Layout from './app/Theme/Layout'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    )
  }
}

export default App;
