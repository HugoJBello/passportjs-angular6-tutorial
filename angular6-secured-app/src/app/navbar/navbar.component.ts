import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  loggedUser: string;
  loggedUserSubs: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedUser = this.authService.loggedUser;
    this.loggedUserSubs = this.authService.loggedUser$.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
  }

  ngOnDestroy() {
    this.loggedUserSubs.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
