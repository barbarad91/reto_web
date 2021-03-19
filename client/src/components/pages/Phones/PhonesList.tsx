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
      {phones.length && phones.map((phone: { name: String; manufacturer: String; imageUrl: String }) => phone.name)}
      <PhoneListCard />
    </main>
  )
}

export default PhonesList
