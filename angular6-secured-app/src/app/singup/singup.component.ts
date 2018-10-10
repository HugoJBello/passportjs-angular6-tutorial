import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NewUser } from '../auth/user';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  newUser: NewUser = { username: '', password: '', email: '' };
  message = '';
  ngOnInit() {
  }

  async signup() {
    try {
      await this.authService.signup(this.newUser);
      this.router.navigate(['/user_page']);
    } catch (err) {
      this.message = err.error.msg;
    }

  }

}
