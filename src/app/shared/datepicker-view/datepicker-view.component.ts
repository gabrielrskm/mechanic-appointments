import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
   standalone: true,
   selector: 'app-datepicker-view',
   templateUrl: './datepicker-view.component.html',
   styleUrls: ['./datepicker-view.component.scss'],
   imports : [CommonModule , MatDatepickerModule, MatFormFieldModule,MatInputModule,ReactiveFormsModule]
})
export class DatepickerViewComponent implements OnInit {
   selected: Date | null = null;

   range = new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    });
   ngOnInit(): void { 
      
   }

   
}

