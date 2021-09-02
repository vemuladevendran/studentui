import { Component, OnInit } from '@angular/core';
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
  ) { }

  async getProfile(): Promise<void> {
    try {
      const data = await this.profileServe.getProfileData();
      this.profileData = data;
    } catch (error) {
      console.log(error);
    }
  }

  logOut() {
    this.authServe.logout();
  }

  ngOnInit() {
    this.getProfile();
  }

}
