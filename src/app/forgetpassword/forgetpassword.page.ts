import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordService } from '../services/student-password/password.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  errorMessage = '';
  showLoader = false;
  forgetPasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentPasswordServe: PasswordService,
    private router: Router,
  ) {
    this.forgetPasswordForm = this.fb.group({
      rollNumber: ['', [Validators.required]]
    });
  }

  async handleSubmit(): Promise<void> {
    try {
   this.showLoader = true;
   const data = await this.studentPasswordServe.forgetPassword(this.forgetPasswordForm.value);
   this.showLoader = false;
   const result = await Swal.fire('Reset Password Link Send to Your Mailid');
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
