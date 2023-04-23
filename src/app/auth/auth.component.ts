import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { AuthService } from '../core/firebase/auth.service';
import { BehaviorSubject, Observable,Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginComponent } from './container/login.component';
import { SiginComponent } from './container/sigin.component';
import { PopUpComponent } from './container/popup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [CommonModule,MatCardModule,MatTabsModule,LoginComponent,SiginComponent,PopUpComponent],
})
export class AuthComponent implements OnInit, OnDestroy {

  service = inject(AuthService)
  route  = inject(Router)
  result$: Observable<any | null> = new BehaviorSubject(null);
  init : Subscription = new Subscription();
  charge : boolean = true

  ngOnInit() {
      // this.result$ = this.service.getUserInfo();
      // this.init = this.result$.subscribe((value) => {
          
      //     if (value === null) this.charge = true;
      //     if (value)  {
      //         this.charge = false;
      //         if (value.role === 'admin') this.route.navigate(['/admin']);
      //         else this.route.navigate(['/appointment']);
      //     }
      
          
      // })
  }

  ngOnDestroy(): void {
      this.init.unsubscribe();
  }

}
