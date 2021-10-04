import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../services/reports/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  showLoader = false;
  reports = [];
  constructor(
    private router: Router,
    private reportServe: ReportsService,
  ) { }

  viewReports(id) {
    this.router.navigate([`view-report/${id}`]);
  }

  async getReportsList(): Promise<void>{
    try {
      this.showLoader = true;
      const data = await this.reportServe.getReports();
      this.reports = data;
      this.showLoader = false;
    } catch (error) {
      console.log(error);
      this.showLoader = false;
    }
  }


  refreshPage(event) {
    this.getReportsList();
    event.target.complete();
  }

  ngOnInit() {
    this.getReportsList();
  }

}
