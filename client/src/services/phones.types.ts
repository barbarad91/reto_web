export type Phone = {
  _id: string
  phone_id: number
  name: string
  manufacturer: string
  imageUrl: string
}

export type PhoneDetail = Phone & {
  description: string
  color: string
  price: number
  screen: string
  processor: string
  ram: number
}
