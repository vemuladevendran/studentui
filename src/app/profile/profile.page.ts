import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { DarkModeService } from '../services/darkMode/dark-mode.service';
import { ProfileService } from '../services/profile/profile.service';
import { TokenService } from '../services/token/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  showLogoutLoader = false;
  profileData: any = [];
  darkMode: any;
  constructor(
    private profileServe: ProfileService,
    private authServe: AuthService,
    private tokenServe: TokenService,
    private darkModeServe: DarkModeService,
  ) { }

  async getProfile(): Promise<void> {
    try {
      const data = await this.profileServe.getProfileData();
      this.profileData = data;
    } catch (error) {
      console.log(error);
    }
  }

  onToggleColorTheme(event) {
    if (event.detail.checked) {
      this.darkMode = true;
      this.tokenServe.setDarkModeToken(true);
      this.darkModeServe.setDarkMode();
    } else {
      this.darkMode = false;
      this.tokenServe.setDarkModeToken(false);
      this.darkModeServe.setDarkMode();
    }
  }

  logOut() {
    this.authServe.logout();
  }

  ngOnInit() {
    this.getProfile();
    this.darkMode = this.darkModeServe.getDarkModeToken();
  }

}
