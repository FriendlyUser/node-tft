// Connect to riot games http
import fetch from 'node-fetch'
import { RegionalUrls, PlatformUrls, HTTP, Tier, Division, AdvLeague } from '../enums'
import { TFTMatch, SummonerObj, RiotInterface, LeagueListDTO, LeagueEntryDTO } from '../types'
export class Riot implements RiotInterface {
  private RIOT_API_KEY: string
  constructor(
    RIOT_API_KEY: string = process.env.RIOT_API_KEY,
    public REGION_URL: RegionalUrls | string = RegionalUrls.AMERICAS,
    public PLATFORM_URL: PlatformUrls | string = PlatformUrls.NA1
  ) {
    if (!process.env.RIOT_API_KEY) throw new Error('THROWING ERROR')
    this.RIOT_API_KEY = RIOT_API_KEY
  }
  /************************************************************************
   **************************** MATCH DATA ********************************
   ***********************************************************************/
  public async getTftByMatchId(matchId: string = null): Promise<TFTMatch> {
    if (!matchId) throw new Error('matchId cannot be null')
    // wNAH--jmUok3Ln2Gbt0VHl_qfJhk8OJEFmC5o_fWyr3eD4D1e34x2WIfeGY8i_7kfmZ9fPrQtH-hCg
    const matchData: TFTMatch = await fetch(
      `https://${this.REGION_URL}/tft/match/v1/matches/${matchId}`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: TFTMatch) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return matchData
  }

  // blank array, send error message
  public async getAllTftMatchesByPuuid(encryptedPUUID: string = null): Promise<Array<number>> {
    if (!encryptedPUUID) throw new Error('encryptedPUUID cannot be null')
    // wNAH--jmUok3Ln2Gbt0VHl_qfJhk8OJEFmC5o_fWyr3eD4D1e34x2WIfeGY8i_7kfmZ9fPrQtH-hCg
    const makeIds: Array<number> = await fetch(
      `https://${this.REGION_URL}/tft/match/v1/matches/by-puuid/${encryptedPUUID}/ids`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: Array<number>) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return makeIds
  }
  /************************************************************************
   ************************* SUMMONER DATA ********************************
   ***********************************************************************/
  public async getTftSummonerByName(summonerName: string = 'AnimeGrillPlayer'): Promise<SummonerObj> {
    const userInfo: SummonerObj = await fetch(
      `https://${this.PLATFORM_URL}/tft/summoner/v1/summoners/by-name/${summonerName}`,
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

  public async getTftSummonerByAccount(accountId: string = 'VYHdpIsp43b0woR8kx0_crrwd5lMfP4H0ot6290JlTpOjus'): Promise<SummonerObj> {
    const userInfo: SummonerObj = await fetch(
      `https://${this.PLATFORM_URL}/tft/summoner/v1/summoners/by-account/${accountId}`,
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

  public async getTftSummonerByPuuid(puuId: string = 'wNAH--jmUok3Ln2Gbt0VHl_qfJhk8OJEFmC5o_fWyr3eD4D1e34x2WIfeGY8i_7kfmZ9fPrQtH-hCg'): Promise<SummonerObj> {
    const userInfo: SummonerObj = await fetch(
      `https://${this.PLATFORM_URL}/tft/summoner/v1/summoners/by-puuid/${puuId}`,
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

  public async getTftSummonerById(id: string = '0D5n4exiMYZSO4V9FK_W8Pia_GPZyQyKheDLuKGN94YTP24'): Promise<SummonerObj> {
    const userInfo: SummonerObj = await fetch(
      `https://${this.PLATFORM_URL}/tft/summoner/v1/summoners/${id}`,
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
  /********************************************************
   *********************** LEAGUE *************************
   ********************************************************/

  // must be master, challenger or grandmaster
  public async getTftAdvLeague(leagueName: AdvLeague | string = AdvLeague.challenger): Promise<LeagueListDTO> {
    const userInfo: LeagueListDTO = await fetch(
      `https://${this.PLATFORM_URL}/tft/league/v1/${leagueName}`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: LeagueListDTO) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return userInfo
  }

  public async getTftLeagueById(leagueId: string): Promise<LeagueListDTO> {
    const userInfo: LeagueListDTO = await fetch(
      `https://${this.PLATFORM_URL}/tft/leagues/${leagueId}`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: LeagueListDTO) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return userInfo
  }

  public async getTftMatches(encryptedSummonerId: string): Promise<LeagueListDTO> {
    const userInfo: LeagueListDTO = await fetch(
      `https://${this.PLATFORM_URL}/tft/league/v1/entries/by-summoner/${encryptedSummonerId}`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: LeagueListDTO) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return userInfo
  }

  public async getTftEntriesByTier(tier: Tier | string = Tier.DIAMOND, division: Division | string = Division.I): Promise<LeagueEntryDTO> {
    const userInfo: LeagueEntryDTO = await fetch(
      `https://${this.PLATFORM_URL}/tft/league/v1/entries/${tier}/${division}`,
      this.makeFetchOptions()
    )
    .then( (resp: any) => {
      return resp.json() 
    })
    .then( (jsonObj: LeagueEntryDTO) => {
      return jsonObj
    })
    .catch( (err: any) => {
      // do logging
      throw new Error('Failed to Get Data from Riot TFT API')
    })
    return userInfo
  }

  // RIOT API KEY SET AND GET
  public setAPIKey(NEW_API_KEY: string) {
    this.RIOT_API_KEY = NEW_API_KEY
  }
  public getAPIKey() {
    return this.RIOT_API_KEY
  }
  private makeFetchOptions(
    method: HTTP = HTTP.GET,
    AcceptLanguage: string = "en-US,en;q=0.9",
    AcceptCharSet: string = "application/x-www-form-urlencoded; charset=UTF-8"
  ) {
    const riotKey = this.RIOT_API_KEY
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
