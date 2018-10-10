import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AuthGuard } from './auth/auth-guard.service';
import { EntriesComponent } from './entries/entries.component';



const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },
  {
    path: 'new_entry',
    component: NewEntryComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'entries',
    component: EntriesComponent,
  },
  {
    path: 'user_page',
    component: UserPageComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})


export class AppRoutingModule { }
