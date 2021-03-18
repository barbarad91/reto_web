import axios, { AxiosInstance } from 'axios'

class PhoneService {
  private api: AxiosInstance
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/phones`,
      withCredentials: true,
    })
  }

  getPhones = () => this.api.get('/all')
}

export default PhoneService
