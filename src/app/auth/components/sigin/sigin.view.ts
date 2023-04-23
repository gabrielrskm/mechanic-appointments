import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
    standalone: true,
    selector: 'app-sigin-form',
    templateUrl: './sigin.view.html',
    styleUrls: ['./sigin.view.scss'],
    imports : [MatFormFieldModule,MatTabsModule,MatInputModule,MatButtonModule,CommonModule]
})
export class SiginFormComponent {
  constructor() { }
  @Output() myEvent = new EventEmitter();
  
  signIn( event : any ) {
    this.myEvent.emit(event);
  }

}
