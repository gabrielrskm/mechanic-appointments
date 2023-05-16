import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScheduleComponent } from '../components/schedule/schedule.component';

@Component({
   standalone: true,
   selector: 'app-schedule-smart',
   template: '<app-schedule></app-schedule>',
   styles: [''],
   imports: [CommonModule,ScheduleComponent]
})
export class ScheduleSmartComponent implements OnInit {
   constructor() { }

   ngOnInit(): void { }
}
