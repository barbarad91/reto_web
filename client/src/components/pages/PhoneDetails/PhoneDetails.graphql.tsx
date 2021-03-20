import gql from 'graphql-tag'
import { Phone } from '../PhonesList/PhonesList.graphql'

export type PhoneDetail = Phone & {
  manufacturer: string
  description: string
  color: string
  price: number
  screen: string
  processor: string
  ram: number
}

export type PhoneDetailsData = {
  phone: PhoneDetail
}

export type PhoneDetailsVars = {
  phone_id: Number
}

export const GET_PHONE_DETAILS = gql`
  query GetPhoneDetails($phone_id: Int!) {
    phone(phone_id: $phone_id) {
      name
      manufacturer
      description
      color
      price
      imageUrl
      screen
      processor
      ram
    }
  }
`
