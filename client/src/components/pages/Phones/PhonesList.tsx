import { Divider, Grid, makeStyles, Theme } from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'

import PhoneService from '../../../services/phones.service'
import { Phone } from '../../../services/phones.types'
import PhoneListCard from './PhoneListCard'

const PhonesList = () => {
  const classes = useStyles()

  const initialPhones: Phone[] = []
  const [phones, setPhones] = useState(initialPhones)

  const phoneService = useMemo(() => new PhoneService(), [])

  const fetchPhones = useCallback(() => {
    phoneService
      .getPhones()
      .then((response) => setPhones(response.data))
      .catch((err) => console.error(err))
  }, [phoneService])

  useEffect(() => {
    fetchPhones()
  }, [fetchPhones])

  return (
    <Grid container className={classes.container}>
      {phones.length &&
        phones.map((phone) => (
          <Grid item xs={12} md={6} lg={3} key={phone.phone_id}>
            <PhoneListCard phone={phone} />
            <Divider />
          </Grid>
        ))}
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    paddingTop: spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default PhonesList
