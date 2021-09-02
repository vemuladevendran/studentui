import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from '../services/reports/reports.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.page.html',
  styleUrls: ['./view-reports.page.scss'],
})
export class ViewReportsPage implements OnInit {
  report: any = [];
  constructor(
    private route: ActivatedRoute,
    private reportServe: ReportsService,
  ) { }

  async getReportDetails(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const data = await this.reportServe.getReportById(id);
      this.report = data;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    this.getReportDetails();
  }

}
