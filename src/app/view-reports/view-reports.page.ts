import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.page.html',
  styleUrls: ['./view-reports.page.scss'],
})
export class ViewReportsPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
