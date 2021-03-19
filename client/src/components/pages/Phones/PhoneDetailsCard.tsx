import { Card, CardMedia, CardContent, Typography, makeStyles, Theme, Grid } from '@material-ui/core'
import clsx from 'clsx'
import { PhoneDetail } from '../../../services/phones/phones.types'
import Icon from '@mdi/react'
import { mdiFactory, mdiCellphoneScreenshot, mdiMemory, mdiChip } from '@mdi/js'

type PhoneDetailsCardProps = {
  className?: string
  phone: PhoneDetail
}

const PhoneDetailsCard = ({ className, phone }: PhoneDetailsCardProps) => {
  const classes = useStyles()
  const { name, imageUrl, manufacturer, description, color, price, screen, processor, ram } = phone
  return (
    <Card className={clsx(className, classes.root)}>
      <CardMedia component="img" className={classes.media} image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="h6" component="h3" className={classes.h3}>
          Specs
        </Typography>
        <Grid container>
          <Grid item lg={6} className={classes.gridItem}>
            <Icon path={mdiFactory} className={classes.icon} />
            <Typography variant="body2" component="h4">
              <strong>Manufacturer</strong>
            </Typography>
            <Typography variant="body2" component="p">
              {manufacturer}
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.gridItem}>
            <Icon path={mdiCellphoneScreenshot} className={classes.icon} />
            <Typography variant="body2" component="h4">
              <strong>Screen</strong>
            </Typography>
            <Typography variant="body2" component="p">
              {screen}
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.gridItem}>
            <Icon path={mdiMemory} className={classes.icon} />
            <Typography variant="body2" component="h4">
              <strong>Processor</strong>
            </Typography>
            <Typography variant="body2" component="p">
              {processor}
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.gridItem}>
            <Icon path={mdiChip} className={classes.icon} />
            <Typography variant="body2" component="h4">
              <strong>RAM</strong>
            </Typography>
            <Typography variant="body2" component="p">
              {ram} GB
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: {
    maxWidth: spacing(80),
  },
  media: {
    height: spacing(30),
    objectFit: 'contain',
  },
  h3: {
    fontWeight: 'normal',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: spacing(2),
  },

  icon: {
    width: spacing(3),
    color: palette.text.secondary,
  },
}))

export default PhoneDetailsCard
