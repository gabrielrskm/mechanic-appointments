import { CommonModule } from '@angular/common';
import {Component,Input,Output,EventEmitter,ViewChild} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

 
export interface LoginInterface {
    email: string;
    password: string;
}

@Component({
    standalone: true,
    selector: 'app-login-view',
    imports: [CommonModule,MatFormFieldModule, FormsModule,MatTabsModule,MatInputModule,MatButtonModule],
    templateUrl: './login.view.html',
    styleUrls: ['./login.view.scss'],
 })
 export class LoginFormComponent {
    @Input() title: string = '';
    @Output() loginEvent: EventEmitter<LoginInterface> =
       new EventEmitter<LoginInterface>();
 
    @ViewChild('myForm') myForm!: NgForm;
 
    initForm = {
       email: '',
       pass: '',
    };
 
    constructor() {}
    clickForm() {
       this.loginEvent.emit({
          email: this.myForm.controls['user'].value,
          password: this.myForm.controls['pass'].value,
       });
    }
 }
 