import { useQuery } from '@apollo/client'
import { makeStyles, Theme } from '@material-ui/core'
import { useParams } from 'react-router'
import LoadingScreen from '../../shared/LoadingScreen'
import { GET_PHONE_DETAILS, PhoneDetailsData, PhoneDetailsVars } from './PhoneDetails.graphql'
import PhoneDetailsCard from './PhoneDetailsCard'

const PhoneDetails = () => {
  const classes = useStyles()

  const { id } = useParams<PhoneDetailsParams>()

  type PhoneDetailsParams = {
    id: string
  }

  const { data } = useQuery<PhoneDetailsData, PhoneDetailsVars>(GET_PHONE_DETAILS, {
    variables: { phone_id: Number(id) },
  })

  const phone = data?.phone

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
    marginTop: spacing(8),
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    marginTop: spacing(4),
  },
}))

export default PhoneDetails
