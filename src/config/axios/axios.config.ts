import { envs } from '@config/envs'
import axios from 'axios'

const axiosInstance = axios.create({
  headers: { Authorization: `Bearer ${envs.token_api}` },
})

export default axiosInstance
