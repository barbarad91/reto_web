import { Button, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { MouseEventHandler } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      maxWidth: theme.spacing(35),
      borderRadius: theme.spacing(1),
    },
    cardImage: {
      height: theme.spacing(35),
    },
    cardButton: {
      marginBottom: theme.spacing(2),
    },
  })
)

type PhoneListCardProps = {
  className?: string
  onClick?: MouseEventHandler
  name: string
  imageUrl: string
}

const PhoneListCard = (props: PhoneListCardProps) => {
  const classes = useStyles()

  return (
    <div className={classes.divCard}>
      <Typography variant="h6">{props.name}</Typography>
      <img className={classes.cardImage} src={props.imageUrl} alt={props.name}></img>
      <Button className={classes.cardButton} variant="contained" color="primary" size="small">
        Ver detalles
      </Button>
    </div>
  )
}

export default PhoneListCard
