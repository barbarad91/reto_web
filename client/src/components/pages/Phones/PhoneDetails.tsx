import { makeStyles, Theme } from '@material-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import PhoneService from '../../../services/phones/phones.service'
import { PhoneDetail } from '../../../services/phones/phones.types'
import LoadingScreen from '../../shared/LoadingScreen'
import PhoneDetailsCard from './PhoneDetailsCard'

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
        <div className={classes.root}>
          <PhoneDetailsCard className={classes.card} phone={phone} />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    marginTop: spacing(4),
  },
}))

type PhoneDetailsParams = {
  id: string
}

export default PhoneDetails
