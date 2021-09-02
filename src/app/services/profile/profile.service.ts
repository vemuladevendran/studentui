import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private tokenServe: TokenService,
    private settings: SettingsService,

  ) { }

  getProfileData(): Promise<any> {
    const tokenData = this.tokenServe.getTokenData();
    return this.http.get(`${this.settings.API_BASE_URL}/student/${tokenData.id}`).toPromise();
  }
}
