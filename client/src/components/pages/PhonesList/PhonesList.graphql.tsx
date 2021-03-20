import gql from 'graphql-tag'

export type Phone = {
  _id: string
  phone_id: number
  name: string
  imageUrl: string
}

export type PhonesListData = {
  allPhones: Phone[]
}

export const GET_PHONES_LIST = gql`
  query GetPhonesList {
    allPhones {
      name
      phone_id
      imageUrl
    }
  }
`
