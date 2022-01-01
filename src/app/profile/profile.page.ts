import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { DarkModeService } from '../services/darkMode/dark-mode.service';
import { ProfileService } from '../services/profile/profile.service';
import { TokenService } from '../services/token/token.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  date = new Date();
  currentYear = this.date.getUTCFullYear();
  showLogoutLoader = false;
  profileData: any = [];
  darkMode: any;
  constructor(
    private profileServe: ProfileService,
    private authServe: AuthService,
    private tokenServe: TokenService,
    private darkModeServe: DarkModeService,
    private alertController: AlertController
  ) { }

  async getProfile(): Promise<void> {
    try {
      const data = await this.profileServe.getProfileData();
      this.profileData = data;
    } catch (error) {
      console.log(error);
    }
  }

  refreshPage(event): void {
    this.getProfile();
    event.target.complete();
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



  async logOut() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>Are you sure you want to logout </strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Log Out',
          handler: () => {
            this.authServe.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.getProfile();
    this.darkMode = this.darkModeServe.getDarkModeToken();
  }

}
