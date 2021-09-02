import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenData: any;

  private tokenKey = 'AUTH_TOKEN';
  constructor() { }

  saveToken(data: any): any {
    localStorage.setItem(this.tokenKey, data);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) as string;
  }


  isTokenExist(): boolean {
    return !!this.getToken();
  }

  removeToken(): any {
    localStorage.removeItem(this.tokenKey);
  }


  getTokenData(): any {
    const token = this.getToken();
    const base64PayloadData = token.split('.')[1].split('.')[0];
    const payload = Buffer.from(base64PayloadData, 'base64');
    const data = JSON.parse(payload.toString()).data;
    return (data);
  }
}
