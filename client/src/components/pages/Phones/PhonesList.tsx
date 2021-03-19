import { Divider, Grid, makeStyles, Theme } from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'

import PhoneService from '../../../services/phones/phones.service'
import { Phone } from '../../../services/phones/phones.types'
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
    <Grid container className={classes.container}>
      {phones.length
        ? phones.map((phone) => (
            <Grid item xs={12} md={6} lg={3} key={phone.phone_id}>
              <PhoneListCard phone={phone} />
              <Divider />
            </Grid>
          ))
        : 'Loading...'}
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
