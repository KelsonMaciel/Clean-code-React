import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import fake from 'faker'

jest.mock('axios')
const mokedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('Should  call axios with correct URL', async () => {
    const url = fake.internet.url()
    const sut = new AxiosHttpClient()
    await sut.post({ url })
    expect(mokedAxios).toHaveBeenCalledWith(url)
  })
})
