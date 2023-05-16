import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CalendarGridComponent } from "../shared/calendar/calendar.component";


interface Option {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    imports: [CommonModule, MatSelectModule, MatFormFieldModule,
        ReactiveFormsModule, CalendarGridComponent]
})
export class AdminComponent {


  formBuilder = inject(FormBuilder);


}
