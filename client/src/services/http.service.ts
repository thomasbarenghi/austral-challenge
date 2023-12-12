import { apiUrl } from '@/utils/constants/env.const'
import axios from 'axios'

export const httpClient = axios.create({
  baseURL: apiUrl + '/api',
  headers: {
    'Content-type': 'application/json'
  }
})
