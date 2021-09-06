import { Component, OnInit } from '@angular/core';
import { CircularsService } from '../services/circulars/circulars.service';
import { TokenService } from '../services/token/token.service';
import { Share } from '@capacitor/share';
import { Url, UrlObject } from 'url';
@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.page.html',
  styleUrls: ['./circulars.page.scss'],
})
export class CircularsPage implements OnInit {
  errorMessage = '';
  showLoader = false;
  circulars: any[] = [];
  defaultPasswordToken = false;
  constructor(
    private circularServe: CircularsService,
    private tokenServe: TokenService,
  ) { }

  async getCircularList(): Promise<void> {
    try {
      this.showLoader = true;
      const data = await this.circularServe.getCircularsData();
      this.circulars = data;
      this.showLoader = false;
    } catch (error) {
      console.log(error);
      this.errorMessage = error.error.message;
      this.showLoader = false;
    }
  }

  getCircularUrls(content): void {
    const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    const text = content?.match(urlRegex);
    if (text === null) {
      return null;
    }
    return text[0].split(',');
  }
  // share circular
  async shareCircular(circularTitle: any, content: any): Promise<any> {
    const shareData = {
      title: circularTitle,
      text: circularTitle + ' : ' + content,
      url: this.getCircularUrls(content) as any,
    };

    try {
      await Share.share(shareData);
      console.log('Data was shared successfully');
    } catch (error) {
      console.error('Share failed:', error.message);
    }
  }

  setDefaultPasswordMessage(): any {
    this.defaultPasswordToken = this.tokenServe.isCircularTokenExist();
  }

  removeDefaultPasswordMessage(): any {
    this.tokenServe.saveCircularToken();
    this.setDefaultPasswordMessage();
  }


  ngOnInit() {
    this.getCircularList();
    this.setDefaultPasswordMessage();
  };
}
