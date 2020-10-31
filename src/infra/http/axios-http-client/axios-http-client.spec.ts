import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import fake from 'faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mokedAxios = axios as jest.Mocked<typeof axios>
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
const mokPostRequest = (): HttpPostParams<any> => ({
  url: fake.internet.url(),
  body: fake.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should  call axios with correct values', async () => {
    const request = mokPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mokedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
