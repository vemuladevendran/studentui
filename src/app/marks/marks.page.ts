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
  totalMarks: any;
  constructor(
    private marksServe: MarksService,
  ) { }

  async getMarksList(): Promise<void> {
    try {
      this.showLoader = true;
      const data = await this.marksServe.getMarksData();
      this.marksData = data;
      this.marksData.map((x) => {
        this.totalMarks = Object.values(x.subjectsMarks);
      });
      this.totalMarks = this.totalMarks.map(i => Number(i)).reduce((a, b) => a + b, 0);
      this.showLoader = false;
    } catch (error) {
      console.log(error);
      this.showLoader = false;
    }
  }



  ngOnInit() {
    this.getMarksList();
  }

}
