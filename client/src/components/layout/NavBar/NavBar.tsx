import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            The Phone Cave
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: 'none',
      color: 'inherit',
    },
  })
)

export default NavBar
