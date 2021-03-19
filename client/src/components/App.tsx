import React from 'react'
import theme from './theme'

import { CssBaseline, ThemeProvider } from '@material-ui/core'

import NavBar from './layout/NavBar/NavBar'
import Routes from './routes/Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes />
    </ThemeProvider>
  )
}

export default App
