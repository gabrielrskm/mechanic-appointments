import { CommonModule } from '@angular/common';
import {Component,Input,Output,EventEmitter, inject} from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup, FormBuilder, Validators } from '@angular/forms';

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
   imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule,
               FormsModule, MatTabsModule,
               MatInputModule, MatButtonModule],
   templateUrl: './login.view.html',
   styleUrls: ['./login.view.scss'],
 })
 export class LoginFormComponent {
    @Input() title: string = '';
    @Output() loginEvent: EventEmitter<LoginInterface> = new EventEmitter<LoginInterface>();
   
   formBuilder = inject(FormBuilder);
   
    public myForm : FormGroup  = this.formBuilder.group({
      user: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.required, Validators.minLength(6)]],
    })
    clickForm() {
       this.loginEvent.emit({
          email: this.myForm.get('user')?.value,
          password: this.myForm.get('pass')?.value,
       });
    }
 }
 