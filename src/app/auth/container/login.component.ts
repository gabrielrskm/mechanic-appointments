import { Component, inject } from '@angular/core';
import { LoginFormComponent, LoginInterface } from '../components/login/login.view';
import { AuthService } from 'src/app/core/firebase/auth.service';

@Component({
   standalone: true,
   imports: [LoginFormComponent],
   selector: 'app-login',
   template: `<app-login-view (loginEvent)="login($event)"></app-login-view> `,
})
export class LoginComponent {
    
   auth = inject(AuthService)

    login(value: LoginInterface) {
      this.auth.signInWithEmail(value.email, value.password);
   }
}