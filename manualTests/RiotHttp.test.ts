import { Riot } from '../src/http/RiotTftV1'
import { SummonerObj } from '../src/types'
require('dotenv').config()
describe('Summoner Profile and Games', () => {
  let riotHttp = null
  const ppuId = "wNAH--jmUok3Ln2Gbt0VHl_qfJhk8OJEFmC5o_fWyr3eD4D1e34x2WIfeGY8i_7kfmZ9fPrQtH-hCg"
  beforeEach(() => {
    riotHttp = new Riot(process.env.RIOT_API_KEY)
  })
  test('Get Summoner Info', async () => {
    const userName: string = 'AnimeGrillPlayer'
    const sumObj: SummonerObj = await riotHttp.getTftSummonerByName(userName)
    expect(sumObj).toBeInstanceOf(Object)
    expect(sumObj.name).toBe(userName)
  }, 10000)
  test('Check Using Non Enum', async () => {
    riotHttp = new Riot(process.env.RIOT_API_KEY, 'na1.api.riotgames.com')
    const userName: string = 'AnimeGrillPlayer'
    const sumObj: SummonerObj = await riotHttp.getTftSummonerByName(userName)
    expect(sumObj).toBeInstanceOf(Object)
    expect(sumObj.name).toBe(userName)
  }, 10000)
  test('Get Game Ids', async () => {
    const sumObj: Array<Number> = await riotHttp.getAllTftMatchesByPuuid(ppuId)
    expect(sumObj).toBeInstanceOf(Array)
  }, 10000)
})
