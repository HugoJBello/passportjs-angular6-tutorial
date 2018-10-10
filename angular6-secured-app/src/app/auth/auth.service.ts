import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginData, UserRetrieved, NewUser } from './user';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  urlBackend = 'http://localhost:3000';
  loggedUser: string;
  loggedUser$: Subject<string> = new Subject();


  async login(loginData: LoginData) {
    const data: any = await this.http.post(this.urlBackend + '/security/login', loginData).toPromise();
    localStorage.setItem('jwtToken', data.token);
    this.loggedUser = loginData.username;
    this.loggedUser$.next(this.loggedUser);
  }

  async signup(signupData: NewUser) {
    return await this.http.post(this.urlBackend + '/security/signup', signupData).toPromise();
  }
  async logout() {
    this.loggedUser = null;
    this.loggedUser$.next(this.loggedUser);
    this.router.navigate(['/']);

    // return await this.http.post(this.urlBackend + '/security/signup', signupData).toPromise();
  }
}
