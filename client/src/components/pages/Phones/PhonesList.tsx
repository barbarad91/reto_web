import { useEffect, useState } from 'react'

import PhoneService from '../../../services/phones.service'
import PhoneListCard from './PhoneListCard'

const PhonesList = () => {
  const [phones, setPhones] = useState([])

  const phoneService = new PhoneService()

  const fetchPhones = () => {
    phoneService
      .getPhones()
      .then((response) => setPhones(response.data))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchPhones()
  }, [])

  return (
    <main>
      {phones.length && phones.map((phone: { name: String; manufacturer: String; imageUrl: String }) => phone.name)}
      <PhoneListCard />
    </main>
  )
}

export default PhonesList
