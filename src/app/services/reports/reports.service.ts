import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient,
    private tokenServe: TokenService,
    private settings: SettingsService,

  ) { }


  getReports(): Promise<any> {
    const tokenData = this.tokenServe.getTokenData();
    return this.http.get(`${this.settings.API_BASE_URL}/report/${tokenData.rollNumber}`).toPromise();
  }

  getReportById(id: any): Promise<any>{
    return this.http.get(`${this.settings.API_BASE_URL}/onereport/${id}`).toPromise();
  }
}
