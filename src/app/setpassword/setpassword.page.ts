import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidationService } from '../services/password/password-validation.service';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.page.html',
  styleUrls: ['./setpassword.page.scss'],
})
export class SetpasswordPage implements OnInit {
  showLoader = false;
  setPasswordForm: FormGroup;
  passwordHide = true;
  confirmPasswordHide = true;

  constructor(
    private fb: FormBuilder,
    private passwordServe: PasswordValidationService,
  ) {
    this.setPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.passwordServe.confimrPasswordValidator('password', 'confirmPassword'),
    });
  }

  ngOnInit() {
  }

}
