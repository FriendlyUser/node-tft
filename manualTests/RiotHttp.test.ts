import { Riot } from '../src/http/RiotTftV1'
import { TFTMatch, SummonerObj } from '../src/types'
require('dotenv').config()
describe('Summoner Profile and Games', () => {
  let riotHttp = null
  const puuId = "wNAH--jmUok3Ln2Gbt0VHl_qfJhk8OJEFmC5o_fWyr3eD4D1e34x2WIfeGY8i_7kfmZ9fPrQtH-hCg"
  const naMatchId = 'NA1_3204555111'
  const accountId = "VYHdpIsp43b0woR8kx0_crrwd5lMfP4H0ot6290JlTpOjus"
  const userName: string = 'AnimeGrillPlayer'
  const id = "0D5n4exiMYZSO4V9FK_W8Pia_GPZyQyKheDLuKGN94YTP24"
  beforeEach(() => {
    riotHttp = new Riot(process.env.RIOT_API_KEY)
  })
  test('getTftSummonerByName()', async () => {
    const sumObj: SummonerObj = await riotHttp.getTftSummonerByName(userName)
    expect(sumObj).toBeInstanceOf(Object)
    expect(sumObj.name).toBe(userName)
  }, 10000)
  test('getTftSummonerByName() using hardcoded PlatformURL', async () => {
    riotHttp = new Riot(process.env.RIOT_API_KEY, 'na1.api.riotgames.com')
    const sumObj: SummonerObj = await riotHttp.getTftSummonerByName(userName)
    expect(sumObj).toBeInstanceOf(Object)
    expect(sumObj.name).toBe(userName)
    console.log(sumObj)
  }, 10000)
  test('getTftSummonerByAccount()', async () => {
    riotHttp = new Riot(process.env.RIOT_API_KEY)
    const sumObj: SummonerObj = await riotHttp.getTftSummonerByAccount(accountId)
    expect(sumObj).toBeInstanceOf(Object)
    expect(sumObj.name).toBe(userName)
  }, 10000)
  test('getTftSummonerByPuuid()', async () => {
    riotHttp = new Riot(process.env.RIOT_API_KEY)
    const sumObj: SummonerObj = await riotHttp.getTftSummonerByPuuid(puuId)
    expect(sumObj).toBeInstanceOf(Object)
    console.log(sumObj)
    expect(sumObj.name).toBe(userName)
  }, 10000)
  test('getTftSummonerByPuuid()', async () => {
    const sumObj: SummonerObj = await riotHttp.getTftSummonerById(id)
    expect(sumObj).toBeInstanceOf(Object)
    expect(sumObj.name).toBe(userName)
  }, 10000)
  test('getAllTftMatchesByPuuid()', async () => {
    const sumObj: Array<number> = await riotHttp.getAllTftMatchesByPuuid(puuId)
    expect(sumObj).toBeInstanceOf(Object)
  }, 10000)
  test('getTftByMatchId()', async () => {
    const sumObj: TFTMatch = await riotHttp.getTftByMatchId(naMatchId)
  }, 10000)
})
