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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  result$: Observable<any | null> = this.service.user$;
  init : Subscription | null = null;
  charge: boolean = true;
  mobile : boolean = false;
  breackpointObserver = inject(BreakpointObserver).observe(Breakpoints.Handset).subscribe(({ matches }) => {
    this.mobile = matches;
  })

  ngOnInit() {
    this.init = this.result$.subscribe((res) => {
      if(res === null)return
      this.route.navigate(['/dashboard']);
    });
    
  }
  ngOnDestroy(): void {
    this.init?.unsubscribe();
    this.breackpointObserver.unsubscribe();
  }

}
