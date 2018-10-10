import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginData } from '../auth/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  loginData: LoginData = { username: '', password: '' };
  message = '';
  data: any;

  ngOnInit() {
  }

  async login() {
    try {
      await this.authService.login(this.loginData);
      this.router.navigate(['user_page']);
      this.message = '';
    } catch (err) {
      this.message = err.error.msg;
    }
  }

}
