import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/firebase/auth.service';

@Component({
  standalone : true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ]
})
export default class DashboardComponent implements OnInit, OnDestroy {
 

  authService = inject(AuthService);
  router = inject(Router)
  @ViewChild('drawer') drawer!: MatDrawer;
  handset: boolean = false;
  
  breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );
  subs : Subscription | null = null;
  
  ngOnInit(): void {
    this.subs  = this.isHandset$.subscribe(handset => this.handset = handset)
    
  }
  clickRef(value: number) {

    if (this.handset) this.drawer.toggle();
    if (value === 3) {
      this.authService.logOut().then(() => {
        this.router.navigate(['/login']);
      });
      return;
    }
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
