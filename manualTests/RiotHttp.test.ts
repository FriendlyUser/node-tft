import { Riot } from '../src/http/RiotTftV1'
import { SummonerObj } from '../src/types'

describe('Summoner Profile and Games', () => {
  beforeEach(() => {
  })
  test('Create New Configuration Settings', async () => {
    const userName: string = 'AnimeGrillPlayer'
    const riotHttp = new Riot(process.env.RIOT_API_KEY)
    const sumObj: SummonerObj = await riotHttp.getTftSummonerByName()
    expect(sumObj).toBeInstanceOf(Object)
    expect(sumObj.name).toBe(userName)
  }, 10000)
})
