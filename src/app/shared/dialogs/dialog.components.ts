import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
   standalone: true,
   selector: 'app-dialog-sigin',
   imports: [MatDialogModule,MatButtonModule],
   template: `
     <h1 mat-dialog-title>{{title}}</h1>
     <div mat-dialog-content>{{message}}</div>
     <div mat-dialog-actions>
       <button mat-button mat-dialog-close>Cerrar</button>
     </div>
 `
 })
export class DialogEmailComponent{
  title: string = '';
  message: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.message  = data.message;
   }

  
   
 }