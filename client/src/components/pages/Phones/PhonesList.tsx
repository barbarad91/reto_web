import { Grid } from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'

import PhoneService from '../../../services/phones.service'
import PhoneListCard from './PhoneListCard'

const PhonesList = () => {
  const [phones, setPhones] = useState([])

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
    <main>
      {phones.length &&
        phones.map((phone: { name: string; manufacturer: string; imageUrl: string; phone_id: number }) => (
          <Grid item>
            <PhoneListCard key={phone.phone_id} name={phone.name} imageUrl={phone.imageUrl} />
          </Grid>
        ))}
    </main>
  )
}

export default PhonesList
