import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PopUpFormComponent } from '../components/popup/popup.view';


@Component({
    standalone: true,
    selector: 'app-pop-up',
    template: `<app-pop-up-form 
                            (buttonEvent)="login($event)"
                            type = "{{type}}">
                            </app-pop-up-form> `,
    imports: [CommonModule,PopUpFormComponent]
})
export class PopUpComponent {

  @Input() type : string  = '';

    login(value: any) { 
       console.log('entro al evento ' + this.type);
    }

}