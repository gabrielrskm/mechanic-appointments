import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
   ReactiveFormsModule,
   FormGroup,
   FormBuilder,
   Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppointmentInterface } from '../core/interface/appointment.inteface';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../core/firebase/auth.service';
import { DatabaseService } from '../core/firebase/database.service';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@Component({
    standalone: true,
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
       NgxMatTimepickerModule,
       MatDatepickerModule,
       MatSelectModule
    ]
})
export class AdminComponent implements OnInit {
   formBuilder = inject(FormBuilder);
   authservice = inject(AuthService);
   firestore = inject(DatabaseService)
   users: string[] = ['usuario1', 'usuario2', 'usuario3'];
   constructor() {}

   myForm: FormGroup = this.formBuilder.group({
      date: ['', [Validators.required]],
      init: ['', [Validators.required]],
      end: ['', [Validators.required]],
   });

   async sendData() {
      const obj: AppointmentInterface = {
         id: Date.now().toString(),
         date: this.myForm.value.date,
         init_time: this.myForm.value.init,
         end_time: this.myForm.value.end,
         status: true,
         user: this.authservice.UserId || '',
      };
      this.myForm.reset({ date: '', init: '', end: '' });
      this.myForm.markAsUntouched()
      try {
         const result = this.firestore.setAppointments(obj);
         result.then(() => {
            console.log('success');
         })

      }
      catch(error) {
         console.log(error);
      }


   }
   ngOnInit(): void {}
}
