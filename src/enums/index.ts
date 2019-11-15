// taken from https://developer.riotgames.com/docs/tft
// figure out how to document typedoc again

// update to endpoints instead of router regions

// See https://developer.riotgames.com/docs/tft
// used to get summoner data like username and ppuid
export enum RegionalUrls {
  AMERICAS = "americas.api.riotgames.com",
  ASIA = "asia.api.riotgames.com",
  EUROPE = "europe.api.riotgames.com",
}

export enum PlatformUrls {
  BR1 = "br1.api.riotgames.com",
  EUN1 = "eun1.api.riotgames.com",
  EUW1 =	"euw1.api.riotgames.com",
  JP1	= "jp1.api.riotgames.com",
  KR	= "kr.api.riotgames.com",
  LA1	= "la1.api.riotgames.com",
  LA2 = "la2.api.riotgames.com",
  NA1	= "na1.api.riotgames.com",
  OC1 = "oc1.api.riotgames.com",
  TR1 = "tr1.api.riotgames.com",
  RU = "ru.api.riotgames.com"
}


export enum HTTP {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum Tier {
  IRON = 'IRON',
  BRONZE = 'BRONZE',
  SLIVER = 'SLIVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
  DIAMOND = 'DIAMOND'
}

export enum Division {
  I = 'I',
  II = 'II',
  III = 'III',
  IV = 'IV'
}

export enum AdvLeague {
  challenger = 'challenger',
  master = 'master',
  grandmaster = 'grandmaster'
}
