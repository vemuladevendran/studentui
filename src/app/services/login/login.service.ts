import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
  ) { }

studentLogin(data: any): Promise<any> {
  return this.http.post(`${this.settings.API_BASE_URL}/studentlogin`, data).toPromise();
}
}
