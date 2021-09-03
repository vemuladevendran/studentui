import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  constructor(
    private http: HttpClient,
    private settings: SettingsService,
    private tokenServe: TokenService,
  ) { }


updatePassword(data: any): Promise<any> {
  const studentToken = this.tokenServe.getTokenData();

  return this.http.post(`${this.settings.API_BASE_URL}/updatestudentpassword/${studentToken.id}`, data).toPromise();
}

forgetPassword(data: any): Promise<any>{
  return this.http.post(`${this.settings.API_BASE_URL}/forgetstudentpassword`, data).toPromise();
}

verifyForgetPassword(id: any, otp: any, data: any): Promise<any>{
  return this.http.post(`${this.settings.API_BASE_URL}/verifystudentforgetpassword/${id}/${otp}`, data).toPromise();
}

}
