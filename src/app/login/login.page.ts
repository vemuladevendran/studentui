import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { TokenService } from '../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showLoader = false;
  errorMessage = '';
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginServe: LoginService,
    private tokenServe: TokenService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      rollNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  inputChange(): any {
    this.errorMessage = '';
  }

  async handleSubmit(): Promise<void> {
    try {
      //  changing status
      this.showLoader = true;
      const data = await this.loginServe.studentLogin(this.loginForm.value);
      this.tokenServe.saveToken(data.token);
      this.showLoader = false;
      this.router.navigate(['/circulars']);
    } catch (error) {
      console.log(error);
      this.errorMessage = error.error.message;
      this.showLoader = false;
    }
  }

  ngOnInit() {
  }

}
