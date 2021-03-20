import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Phone } from '../../../services/phones/phones.types'
import { Link } from 'react-router-dom'

type PhoneListCardProps = {
  phone: Phone
}

const PhoneListCard = ({ phone }: PhoneListCardProps) => {
  const classes = useStyles()

  const { name, imageUrl, phone_id } = phone

  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={imageUrl} alt={name} className={classes.media} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" component={Link} to={`details/${phone_id}`}>
          See more
        </Button>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }: Theme) =>
  createStyles({
    root: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: spacing(2),
    },
    media: {
      height: spacing(35),
      objectFit: 'contain',
    },
    cardButton: {
      margin: spacing(2),
    },
  })
)

export default PhoneListCard
