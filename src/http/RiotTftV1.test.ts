import { Riot } from './RiotTftV1'
jest.mock('node-fetch')
// no idea why, but require works instead of import
// MUST USE FOR THE MOCKS
require('dotenv').config()
const fetch = require('node-fetch')
import { SummonerObj } from '../types'
const { Response, Headers } = jest.requireActual('node-fetch')

const ResponseJSON = {
  status: 200,
  statusText: 'Successfully Returned JSON',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}
describe('Summoner Profile and Games', () => {
  const sampleObj: SummonerObj = {
    id: '1asdasdasd',
    accountId: 'a23sdadasdasd',
    puuid: '31adsadasdsad',
    name: 'grandfleet',
    profileIconId: 4175,
    revisionDate: 1573445669000,
    summonerLevel: 69
  }
  beforeEach(() => {
    fetch.resetMocks()
  })
  // tommorow mock more tests out there
  test('Create New Configuration Settings', async () => {
    fetch
      .mockReturnValueOnce(Promise.resolve(new Response(JSON.stringify(sampleObj), ResponseJSON)))
    const riotHttp = new Riot(process.env.RIOT_API_KEY)
    const sumObj = await riotHttp.getTftSummonerByName('AnimeGrillPlayer')
    expect(sumObj).toEqual(sampleObj)
  }, 10000)
})
