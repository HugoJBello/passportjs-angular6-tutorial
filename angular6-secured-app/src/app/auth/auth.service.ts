import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginData, UserRetrieved } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loggedUser: any;

  async login(loginData: LoginData) {
    this.loggedUser = await this.http.post('/security/login', loginData).toPromise();
    localStorage.setItem('jwtToken', this.loggedUser.token);
  }

  async signup(signupData) {
    return await this.http.post('/security/signup', signupData);
  }

  async getEntries() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
  }

}
