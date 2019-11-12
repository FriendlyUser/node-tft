import { PlatformUrls, RegionalUrls } from '../enums'

export class Config {
  private RIOT_API_KEY: string
  REGION_URL: RegionalUrls | string
  PLATFORM_URL: PlatformUrls | string
  constructor(
    RIOT_API_KEY: string, 
    REGION_URL: RegionalUrls | string = RegionalUrls.AMERICAS,
    PLATFORM_URL: PlatformUrls | string = PlatformUrls.NA1
  ) {
    this.setAPIKey(RIOT_API_KEY)
    // check to make sure string in enum
    console.log(REGION_URL)
    this.REGION_URL = REGION_URL
    this.PLATFORM_URL = PLATFORM_URL
  }
  private setAPIKey(NEW_API_KEY: string) {
    this.RIOT_API_KEY = NEW_API_KEY
  }
  public getAPIKey() {
    return this.RIOT_API_KEY
  }
}

// add hardcoded mapping in util file for regions and/or locations