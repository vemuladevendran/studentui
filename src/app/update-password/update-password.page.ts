import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  showLoader = false;
  updatePasswordForm: FormGroup;
  passwordHide = true;
  newPasswordHide = true;
  constructor(
    private fb: FormBuilder,
  ) {
    this.updatePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

}
