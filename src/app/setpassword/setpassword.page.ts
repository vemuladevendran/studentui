import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidationService } from '../services/password/password-validation.service';
import Swal from 'sweetalert2';
import { PasswordService } from '../services/student-password/password.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.page.html',
  styleUrls: ['./setpassword.page.scss'],
})
export class SetpasswordPage implements OnInit {
  errorMessage = '';
  showLoader = false;
  setPasswordForm: FormGroup;
  passwordHide = true;
  confirmPasswordHide = true;

  constructor(
    private fb: FormBuilder,
    private passwordServe: PasswordValidationService,
    private studentPasswordServe: PasswordService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.setPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: this.passwordServe.confimrPasswordValidator('password', 'confirmPassword'),
    });
  }

  async handleSubmit(): Promise<void>{
    try {
      this.showLoader = true;
      const id = this.route.snapshot.paramMap.get('id');
      const otp = this.route.snapshot.paramMap.get('otp');
      const data = await this.studentPasswordServe.verifyForgetPassword(id, otp, this.setPasswordForm.value);
      this.showLoader = false;
      const result = await Swal.fire('Password Changed');
      if (result.isConfirmed) {
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
      this.errorMessage = error.error.message;
      this.showLoader = false;
    }
  }

  ngOnInit() {
  }

}
