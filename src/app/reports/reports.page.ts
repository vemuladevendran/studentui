import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  showLoader = true;
  reports = Array(10).fill('');
  constructor(
    private router: Router,
  ) { }

  viewReports(id) {
    this.router.navigate([`view-report/${'new'}`]);
  }

  ngOnInit() {
  }

}
