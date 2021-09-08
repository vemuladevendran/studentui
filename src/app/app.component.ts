/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './services/darkMode/dark-mode.service';
import { Platform, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private darkModeServe: DarkModeService,
    private platform: Platform,
    private _location: Location,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }



  //  exit alert

  initializeApp() {


    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/circulars' || '/reports' || '/marks' || '/profile')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }

    });


    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          // eslint-disable-next-line @typescript-eslint/dot-notation
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      });
    });
  }

  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          // eslint-disable-next-line @typescript-eslint/dot-notation
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }


  // push notification

  pushNotification() {
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        console.log('granted');
        PushNotifications.register();
      } else {
        console.log('not granted');
      }
    });


    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        const title = JSON.stringify(notification.title);
        const message = JSON.stringify(notification.body);
        alert(
          `${title}
           ${message} `
        );
      },
    );

  }



  ngOnInit() {
    this.darkModeServe.setDarkMode();
    this.pushNotification();
  }


}
