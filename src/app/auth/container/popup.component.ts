import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { PopUpFormComponent } from '../components/popup/popup.view';
import { AuthService } from 'src/app/core/firebase/auth.service';
import { DialogEmailComponent } from '../../shared/dialogs/dialog.components';
import { MatDialog } from '@angular/material/dialog';

@Component({
   standalone: true,
   selector: 'app-pop-up',
   template: `<app-pop-up-form (buttonEvent)="login()" type="{{ type }}">
   </app-pop-up-form> `,
   imports: [CommonModule, PopUpFormComponent],
})
export class PopUpComponent {
   @Input() type: string = '';
   auth = inject(AuthService);
   dialog = inject(MatDialog);

   async login() {
     let response = null;
     try {
         if (this.type === 'google') response = await this.auth.signInWithGoogle();
         if (this.type === 'facebook') response = await this.auth.signInWithFacebook();
         if (this.type === 'github') response = await this.auth.signInWithGithub();
      }
     catch (error: any) {
         this.dialog.open(DialogEmailComponent, {
            data: {
               title: 'Error al autenticar',
               message: error.code,
            },
         });
      }
   }
}
