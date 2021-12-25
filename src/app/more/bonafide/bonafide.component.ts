import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { format, parseISO } from 'date-fns';
import { IonDatetime } from '@ionic/angular';
@Component({
  selector: 'app-bonafide',
  templateUrl: './bonafide.component.html',
  styleUrls: ['./bonafide.component.scss'],
})
export class BonafideComponent implements OnInit {

  bonafiedForm: FormGroup;
  preview = false;
  formpage = true;
  previewData: any = {};
  dateValue = '';
  constructor(
    private fb: FormBuilder,
  ) {
    this.bonafiedForm = this.fb.group({
      studentName: ['DEVENDRAN V'],
      examNumber: ['211419205038'],
      subjectCode: ['CS8461'],
      subject: ['OPERATING SYSTEM LABORATORY'],
      year: ['II', [Validators.required]],
      branch: ['INFORMATION TECHNOLOGY', [Validators.required]],
      semester: ['IV', [Validators.required]],
      examData: ['', ],
    });
  }
  ngOnInit() {}
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  previewPage(): void {
    if (this.preview) {
      this.previewData = {};
      this.preview = !this.preview;
      this.formpage = !this.formpage;
      return;
    }
    this.previewData = this.bonafiedForm.value;
    this.preview = !this.preview;
    this.formpage = !this.formpage;
  }

  printBonafied(): void {
    window.print();
  }


}
