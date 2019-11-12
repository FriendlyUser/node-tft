// Connect to riot games http
import fetch from 'node-fetch'
import { Config } from '../config'
import { RegionalUrls, PlatformUrls, HTTP } from '../enums'
import { SummonerObj, RiotInterface } from '../types'
export class Riot implements RiotInterface {
  public Config: Config
  constructor(
    RIOT_API_KEY: string = process.env.RIOT_API_KEY,
    REGION_URL: RegionalUrls | string = RegionalUrls.AMERICAS,
    PLATFORM_URL: PlatformUrls | string = PlatformUrls.NA1
  ) {
    if (!process.env.RIOT_API_KEY) throw new Error('THROWING ERROR')
    this.Config = new Config(RIOT_API_KEY, REGION_URL, PLATFORM_URL)
  }
  /**
   * {
    "status": {
        "status_code": 404,
        "message": "Data not found - match file not found"
    }
}
   */
  public async getTftByMatchId(matchId: string = null): Promise<Object> {
    if (!matchId) throw new Error('matchId cannot be null')
    // wNAH--jmUok3Ln2Gbt0VHl_qfJhk8OJEFmC5o_fWyr3eD4D1e34x2WIfeGY8i_7kfmZ9fPrQtH-hCg
    const matchData: Object = await fetch(
      `https://${this.Config.REGION_URL}/tft/match/v1/matches/${matchId}}`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: Object) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    console.log(matchData)
    return matchData
  }

  // blank array, send error message
  public async getAllTftMatchesByPuuid(encryptedPUUID: string = null): Promise<Array<Number>> {
    if (!encryptedPUUID) throw new Error('encryptedPUUID cannot be null')
    // wNAH--jmUok3Ln2Gbt0VHl_qfJhk8OJEFmC5o_fWyr3eD4D1e34x2WIfeGY8i_7kfmZ9fPrQtH-hCg
    const makeIds: Array<Number> = await fetch(
      `https://${this.Config.REGION_URL}/tft/match/v1/matches/by-puuid/${encryptedPUUID}/ids`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: Array<Number>) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return makeIds
  }
  public async getTftSummonerByName(summonerName: string = 'AnimeGrillPlayer'): Promise<SummonerObj> {
    console.log(`https://${this.Config.PLATFORM_URL}/tft/summoner/v1/summoners/by-name/${summonerName}`)
    const userInfo: SummonerObj = await fetch(
      `https://${this.Config.PLATFORM_URL}/tft/summoner/v1/summoners/by-name/${summonerName}`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: SummonerObj) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return userInfo
  }
  private makeFetchOptions(method: HTTP = HTTP.GET, AcceptLanguage: string = "en-US,en;q=0.9", AcceptCharSet: string = "application/x-www-form-urlencoded; charset=UTF-8"  ) {
    const riotKey = this.Config.getAPIKey()
    // make custom Error Classes later
    if (!riotKey) return {}
    return {
        method: method,
        headers: { 
          "Accept-Charset": AcceptCharSet,
          "Accept-Language": AcceptLanguage,
          'X-Riot-Token': riotKey
        }
    }
  }
}
