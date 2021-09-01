import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.page.html',
  styleUrls: ['./circulars.page.scss'],
})
export class CircularsPage implements OnInit {
  showLoader = true;
 circulars = Array(10).fill('');

  constructor() { }

  ngOnInit() {
  }

}
