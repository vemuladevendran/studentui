import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.page.html',
  styleUrls: ['./marks.page.scss'],
})
export class MarksPage implements OnInit {
  showLoader = true;
  marks = Array(10).fill('');
  constructor() { }

  ngOnInit() {
  }

}
