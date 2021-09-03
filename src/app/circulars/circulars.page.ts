import { Component, OnInit } from '@angular/core';
import { CircularsService } from '../services/circulars/circulars.service';

@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.page.html',
  styleUrls: ['./circulars.page.scss'],
})
export class CircularsPage implements OnInit {
  errorMessage = '';
  showLoader = false;
  circulars: any[] = [];

  constructor(
    private circularServe: CircularsService,
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
    const text =  content?.match(urlRegex);
    if(text === null){
    return null;
    }
    return text[0].split(',');
  }


  ngOnInit() {
    this.getCircularList();
  }

}
