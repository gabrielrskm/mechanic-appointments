import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSmartComponent } from './container/calendar-smart.component';
import { ScheduleSmartComponent } from './container/schedule-smart.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule,CalendarSmartComponent,ScheduleSmartComponent],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export default class AppointmentComponent {
  

}
