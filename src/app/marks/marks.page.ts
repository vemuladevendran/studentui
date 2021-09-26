import { Component, OnInit } from '@angular/core';
import { MarksService } from '../services/marks/marks.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.page.html',
  styleUrls: ['./marks.page.scss'],
})
export class MarksPage implements OnInit {
  showLoader = false;
  marksData: any = [];
  constructor(
    private marksServe: MarksService,
  ) { }

  async getMarksList(): Promise<void> {
    try {
      this.showLoader = true;
      const data = await this.marksServe.getMarksData();
      this.marksData = data;
      this.marksData = this.marksData.map((x) => ({
        ...x,
        total: Object.values(x.subjectsMarks).map(i => Number(i)).reduce((a, b) => a + b, 0)
      }));
      this.showLoader = false;
    } catch (error) {
      console.log(error);
      this.showLoader = false;
    }
  }


  refreshPage(event) {
    window.location.reload();
    event.target.complete();
  }


  ngOnInit() {
    this.getMarksList();
  }

}
