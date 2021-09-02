import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordService } from '../services/student-password/password.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  errorMessage = '';
  showLoader = false;
  updatePasswordForm: FormGroup;
  passwordHide = true;
  newPasswordHide = true;
  constructor(
    private fb: FormBuilder,
    private studentPasswordServe: PasswordService,
    private router: Router,
  ) {
    this.updatePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async handleSubmit(): Promise<void> {
    try {
      //  changing status
      this.showLoader = true;
      const data = await this.studentPasswordServe.updatePassword(this.updatePasswordForm.value);
      console.log(data);
      this.showLoader = false;
      const result = await Swal.fire('Password updated Successfuly');
      if (result.isConfirmed) {
        this.router.navigate(['/profile']);
      }
    } catch (error) {
      console.log(error);
      this.errorMessage = error.error.message;
      this.showLoader = false;
    }
  }
}

