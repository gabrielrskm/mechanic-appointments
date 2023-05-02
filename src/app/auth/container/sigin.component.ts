import { Component, inject } from '@angular/core';
import { SiginFormComponent } from '../components/sigin/sigin.view';
import { AuthService } from 'src/app/core/firebase/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEmailComponent } from '../../shared/dialogs/dialog.components';
import { Router } from '@angular/router';

@Component({
   standalone: true,
   imports: [SiginFormComponent,MatDialogModule],
   selector: 'app-sigin',
   template: `<app-sigin-form (myEvent)="sigIn($event)"></app-sigin-form>`,
})
export class SiginComponent {

  fireAuth = inject(AuthService);
  dialog = inject(MatDialog);
  router  = inject(Router);
  async sigIn(value: any) {
    console.log(value);
    try {
      const res = await this.fireAuth.createUserWithEmail(value.email, value.pass);
      this.dialog.open(DialogEmailComponent, {
        data: {
          title: 'Usuario creado',
          message: 'Se ha creado un usuario con éxito, revise su email para activar su cuenta'
        }
      });
      this.router.navigate(['auth']);
      
    }
    catch(error:any) {
      this.dialog.open(DialogEmailComponent, {
        data: {
          title: 'Error al crear usuario',
          message: error.code
      }});
    }
  }
}



