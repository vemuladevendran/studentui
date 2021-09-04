import { Injectable, Renderer2 } from '@angular/core';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor(
    private tokenServe: TokenService,
    // private renderer: Renderer2,
  ) {}

  setDarkMode() {
    const data = this.getDarkModeToken();
    if (data) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }

  }
  getDarkModeToken() {
    return this.tokenServe.getDarkModeToken();
  }
}
