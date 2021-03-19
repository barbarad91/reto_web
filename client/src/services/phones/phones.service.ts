import axios, { AxiosInstance } from 'axios'
import { Phone, PhoneDetail } from './phones.types'

class PhoneService {
  private api: AxiosInstance
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/phones`,
      withCredentials: true,
    })
  }

  getPhones = () => this.api.get<Phone[]>('/all')
  getPhoneById = (phoneId: number) => this.api.get<PhoneDetail>(`/${phoneId}`)
}

export default PhoneService
