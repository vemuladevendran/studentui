import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class MarksService {
  constructor(
    private http: HttpClient,
    private settings: SettingsService,
    private tokenServe: TokenService,
  ) { }

  getMarksData(): Promise<any>{
    const tokenData = this.tokenServe.getTokenData();
    return this.http.get(`${this.settings.API_BASE_URL}/marks/${tokenData.rollNumber}`).toPromise();
  }
}
