import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

interface TodoList  {
  date: Date;
  title: string;
  init: number;
  end: number;
  completed: boolean;
}

interface DateParam {
  firstDayOfWeek?: number;
  nowDayOfMonth?: number;
  endDayOfMonth?: number;
  endDayOfWeek?: number;
  previusDayOFMonth?: number;
}



@Component({
  standalone: true,
  selector: 'app-calendar-grid',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule,MatGridListModule],
})
export class CalendarGridComponent implements OnInit {

  @Input() date: Date | null = null;
  @Input() todoList: TodoList[] = [];
  breakpointObserver = inject(BreakpointObserver);


  days: Array <any> = []
  dateParamNow: DateParam = {}
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) return true
      return false
    })
  );

  constructor() { }

  ngOnInit() {
    if (this.date === null) this.date = new Date();
    this.dateParamNow = {
      firstDayOfWeek: new Date(this.date.getFullYear(),this.date.getMonth(),1).getDay(),
      nowDayOfMonth: this.date.getDate(),
      endDayOfMonth: new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate(),
      endDayOfWeek: new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay(),
      previusDayOFMonth: new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate(),
    }
    console.log(this.dateParamNow);
    for(let i = this.dateParamNow.firstDayOfWeek! , j = 0; i > 0; i--, j++) {
      this.days.unshift({
          numberDay: this.dateParamNow.previusDayOFMonth! - j,
        currentMonth: false,
        dayName: this.date.getDay()
        }
        );
    }
    for (let i = 1; i <= this.dateParamNow.endDayOfMonth!; i++) {
      this.days.push({
        numberDay: i,
        currentMonth: true,
        dayName: this.date.getDay()
      })
    }
    for (let i = 1; i <= this.dateParamNow.endDayOfWeek!; i++) {
      this.days.push({
        numberDay: i,
        currentMonth: false,
        dayName: this.date.getDay()
      })
    }

    
  }

  selectDay(index : number, month: boolean) {
    console.log (index + ' ' + month);
  }

}

