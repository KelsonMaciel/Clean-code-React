import fake from 'faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mokedAxios = axios as jest.Mocked<typeof axios>
  mokedAxios.post.mockResolvedValue({
    data: fake.random.objectElement(),
    status: fake.random.number()
  })
  return mokedAxios
}
