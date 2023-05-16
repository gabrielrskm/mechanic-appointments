import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../components/calendar/calendar.component';

@Component({
   standalone:true,
   selector: 'app-calendar-smart',
   template: '<app-calendar></app-calendar>',
   styles: [''],
   imports: [CommonModule,CalendarComponent]
})
export class CalendarSmartComponent implements OnInit {
   constructor() { }

   ngOnInit(): void { }
}
