import { HttpPostParams } from '@/data/protocols/http'
import Axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<void> {
    await Axios(params.url)
  }
}
