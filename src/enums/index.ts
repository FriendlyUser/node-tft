// taken from https://developer.riotgames.com/docs/tft
// figure out how to document typedoc again

// update to endpoints instead of router regions
export enum RegionUrl {
  AMERICAS = "na1.api.riotgames.com",
  ASIA = "asia.api.riotgames.com",
  EUROPE = "europe.api.riotgames.com",
}

export enum HTTP {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}