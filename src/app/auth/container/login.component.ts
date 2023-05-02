import { Component, inject } from '@angular/core';
import { LoginFormComponent, LoginInterface } from '../components/login/login.view';
import { AuthService } from 'src/app/core/firebase/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmailComponent } from '../../shared/dialogs/dialog.components';

@Component({
   standalone: true,
   imports: [LoginFormComponent],
   selector: 'app-login',
   template: `<app-login-view (loginEvent)="login($event)"></app-login-view> `,
})
export class LoginComponent {
    
   auth = inject(AuthService)
   router = inject(Router)
   dialog  = inject(MatDialog);

   login(value: LoginInterface) {
      const res = this.auth.signInWithEmail(value.email, value.password);
      res.catch(error => {
         this.dialog.open(DialogEmailComponent, {
            data: {
               title: 'Error',
               message: error.code
            }
         });
       })
   }
}