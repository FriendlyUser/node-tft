import { Config } from '../config'
export interface SummonerObj {
  readonly id?: string
  readonly accountId?: string
  readonly puuid?: string
  readonly name?: string
  profileIconId?: Number
  revisionDate?: Number
  summonerLevel?: Number
}


export interface RiotInterface {
  Config: Config
  getAllTftMatchesByPuuid(encryptedPUUID: String): Promise<Array<Number>>
  getTftSummonerByName(summonerName: String): Promise<SummonerObj>
}