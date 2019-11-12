import { Config } from './index'

describe('Hello Function', () => {
  beforeEach(() => {
  })
  test('Create New Configuration Settings', async () => {
    const newConfig = new Config('testing')
    expect(newConfig.BASE_URL).toEqual("na1.api.riotgames.com")
  }, 10000)
})