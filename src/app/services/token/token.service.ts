import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenData: any;
  private tokenKey = 'AUTH_TOKEN';
  private circularTokenKey = 'CIRCULAR';
  private darkModeTokenKey = 'DARK_MODE';

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
    const payload = JSON.parse(atob(token.split('.')[1])).data;
    return (payload);
  }


  // circular token

  saveCircularToken(): any{
    localStorage.setItem(this.circularTokenKey, 'new student');
  }

  getCircularToken(): string {
    return localStorage.getItem(this.circularTokenKey) as string;
  }

  isCircularTokenExist(): boolean{
    return !!this.getCircularToken();
  }


  // dark mode toke

  setDarkModeToken(data: any){
    localStorage.setItem(this.darkModeTokenKey,(data ? 1 : 0) as any);
  }

  getDarkModeToken(): string {
    return (!!+localStorage.getItem(this.darkModeTokenKey) as any);
  }
}
