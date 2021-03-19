import { Button, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { MouseEventHandler } from 'react'
import { Phone } from '../../../services/phones.types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.spacing(1),
    },
    cardImage: {
      height: theme.spacing(35),
    },
    cardButton: {
      margin: theme.spacing(2),
    },
  })
)

type PhoneListCardProps = {
  className?: string
  onClick?: MouseEventHandler
  phone: Phone
}

const PhoneListCard = ({ className, onClick, phone }: PhoneListCardProps) => {
  const classes = useStyles()

  const { name, imageUrl } = phone

  return (
    <div className={classes.divCard}>
      <Typography variant="h6">{name}</Typography>
      <img className={classes.cardImage} src={imageUrl} alt={name}></img>
      <Button className={classes.cardButton} variant="contained" color="primary" size="small">
        Ver detalles
      </Button>
    </div>
  )
}

export default PhoneListCard
