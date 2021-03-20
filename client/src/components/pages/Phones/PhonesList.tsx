import { Grid, makeStyles, Theme } from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'

import PhoneService from '../../../services/phones/phones.service'
import { Phone } from '../../../services/phones/phones.types'
import LoadingScreen from '../../shared/LoadingScreen'
import PhoneListCard from './PhoneListCard'

const PhonesList = () => {
  const classes = useStyles()

  const [phones, setPhones] = useState<Phone[]>([])

  const phoneService = useMemo(() => new PhoneService(), [])

  const fetchPhones = useCallback(async () => {
    try {
      const response = await phoneService.getPhones()
      setPhones(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [phoneService])

  useEffect(() => {
    fetchPhones()
  }, [fetchPhones])

  return (
    <Grid container className={classes.container} spacing={2}>
      {phones.length ? (
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
