import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import fake from 'faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mokedAxios = axios as jest.Mocked<typeof axios>

const mokedAxiosResult = {
  data: fake.random.objectElement(),
  status: fake.random.number()
}

mokedAxios.post.mockResolvedValue(mokedAxiosResult)
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

  test('Should  return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mokPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mokedAxiosResult.status,
      body: mokedAxiosResult.data
    })
  })
})
