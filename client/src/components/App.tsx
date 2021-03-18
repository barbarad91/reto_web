import React from 'react'
import theme from './theme'

import { CssBaseline, ThemeProvider, makeStyles, Theme } from '@material-ui/core'

import Button from './shared/Button'
import NavBar from './layout/NavBar/NavBar'
import Routes from './routes/Routes'

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes />
    </ThemeProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    justifyContent: 'center',
  },
}))

export default App
