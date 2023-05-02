import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   standalone: true,
   selector: 'app-useer',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.scss'],
   imports: [CommonModule]
})
export class UserComponent implements OnInit {
   constructor() { }

   ngOnInit(): void { }
}
