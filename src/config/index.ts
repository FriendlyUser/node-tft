import { RegionUrl } from '../enums'

export class Config {
  private RIOT_API_KEY: string
  BASE_URL: RegionUrl
  constructor(RIOT_API_KEY: string, BASE_URL: RegionUrl = RegionUrl.AMERICAS) {
    this.setAPIKey(RIOT_API_KEY)
    this.BASE_URL = BASE_URL
  }
  private setAPIKey(NEW_API_KEY: string) {
    this.RIOT_API_KEY = NEW_API_KEY
  }
  public getAPIKey() {
    return this.RIOT_API_KEY
  }
}

// add hardcoded mapping in util file for regions and/or locations