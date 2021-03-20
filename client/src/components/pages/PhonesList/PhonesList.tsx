import { useQuery } from '@apollo/client'
import { Grid, makeStyles, Theme } from '@material-ui/core'

import LoadingScreen from '../../shared/LoadingScreen'
import PhoneListCard from './PhoneListCard'
import { PhonesListData, GET_PHONES_LIST } from './PhonesList.graphql'

const PhonesList = () => {
  const classes = useStyles()

  const { data } = useQuery<PhonesListData>(GET_PHONES_LIST)

  const phones = data?.allPhones
  return (
    <Grid container className={classes.container} spacing={2}>
      {phones?.length ? (
        phones.map((phone) => (
          <Grid item xs={12} sm={6} lg={3} key={phone.phone_id} className={classes.gridItem}>
            <PhoneListCard phone={phone} />
          </Grid>
        ))
      ) : (
        <LoadingScreen />
      )}
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    marginTop: spacing(8),
    paddingTop: spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default PhonesList
