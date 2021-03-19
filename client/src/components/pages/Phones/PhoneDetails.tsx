import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import PhoneService from '../../../services/phones/phones.service'
import { PhoneDetail } from '../../../services/phones/phones.types'
import LoadingScreen from '../../shared/LoadingScreen'

const PhoneDetails = () => {
  const { id } = useParams<PhoneDetailsParams>()
  const [phone, setPhone] = useState<PhoneDetail | undefined>()

  const phoneService = useMemo(() => new PhoneService(), [])

  const fetchPhone = useCallback(async () => {
    try {
      const response = await phoneService.getPhoneById(id)
      setPhone(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [id, phoneService])

  useEffect(() => {
    fetchPhone()
  }, [fetchPhone])

  const classes = useStyles()

  return (
    <>
      {phone ? (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              image="https://res.cloudinary.com/dcprb2mtk/image/upload/v1616079512/web-test/Galaxy_S7_zjixw2.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: { width: spacing(80) },
  media: {
    height: spacing(30),
    objectFit: 'contain',
  },
}))

type PhoneDetailsParams = {
  id: string
}

export default PhoneDetails
