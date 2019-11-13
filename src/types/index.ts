import { RegionalUrls, PlatformUrls } from '../enums';
// match participant
interface MatchParticipant {
  placement: number
  level: number
  last_round: number // figure out how to map this to meaning number elsewhere
  time_eliminated: number
  companion: Companion
  traits: Array<Traits>
  players_eliminated: number
  total_damage_to_players: number
  units: Array<Unit>
  gold_left: number
}

interface Unit {
  tier: number
  items: Array<number> // array of item numbers, see items.json
  character_id: string // maybe make this enum???
  name: string
  rarity: number
}
interface Companion {
  skin_ID: number
  content_ID: string
  species: string
}
// traits for tft units, example: Ocean
interface Traits {
  tier_total: number
  name: string
  tier_current: number
  num_units: number
}

// metadata for endpoint returned from matches
interface MatchMetaData {
  data_version: number | string
  match_id: string 
  participants: Array<string>
}

interface MatchInfo {
  game_datatime: number // unix timestamp
  game_length: number // seconds 
  participants: Array<MatchParticipant>
  queue_id: number
  tft_set_number: number
}

export interface SummonerObj {
  readonly id?: string
  readonly accountId?: string
  readonly puuid?: string
  readonly name?: string
  profileIconId?: number
  revisionDate?: number
  summonerLevel?: number
}

export interface RiotInterface {
  REGION_URL: RegionalUrls | string,
  PLATFORM_URL: PlatformUrls | string,
  getAllTftMatchesByPuuid(encryptedPUUID: string): Promise<Array<number>>
  getTftByMatchId(matchId: string): Promise<TFTMatch>
  // summoner info endpoints
  getTftSummonerByName(summonerName: string): Promise<SummonerObj>
  getTftSummonerByAccount(account: string): Promise<SummonerObj>
  getTftSummonerByPuuid(puuid: string): Promise<SummonerObj>
  getTftSummonerById(id: string): Promise<SummonerObj>
}

export interface TFTMatch {
  readonly info: MatchInfo
  readonly metadata: MatchMetaData
}
