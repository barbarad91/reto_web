import { Button, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Phone } from '../../../services/phones/phones.types'

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
  phone: Phone
}

const PhoneListCard = ({ phone }: PhoneListCardProps) => {
  const classes = useStyles()

  const { name, imageUrl, phone_id } = phone

  return (
    <div className={classes.divCard}>
      <Typography variant="h6">{name}</Typography>
      <img className={classes.cardImage} src={imageUrl} alt={name}></img>
      <Button
        className={classes.cardButton}
        variant="contained"
        color="primary"
        size="small"
        component={Link}
        to={`/details/${phone_id}`}
      >
        Ver detalles
      </Button>
    </div>
  )
}

export default PhoneListCard
