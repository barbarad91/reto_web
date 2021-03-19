import React from 'react'
import theme from './theme'

import { CssBaseline, ThemeProvider, makeStyles, Grid } from '@material-ui/core'

import NavBar from './layout/NavBar/NavBar'
import Routes from './routes/Routes'

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Grid className={classes.container}>
        <Routes />
      </Grid>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '7vh',
    minHeight: '94vh',
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default App
