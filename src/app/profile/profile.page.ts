import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  showLogoutLoader = false;
  profileData: any = [];
  constructor(
    private profileServe: ProfileService,
    private authServe: AuthService,
    private renderer: Renderer2,
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
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }

  logOut() {
    this.authServe.logout();
  }

  ngOnInit() {
    this.getProfile();
  }

}
