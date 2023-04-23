import { Component } from '@angular/core';
import { SiginFormComponent } from '../components/sigin/sigin.view';

@Component({
    standalone: true,
    imports: [SiginFormComponent],
  selector: 'app-sigin',
  template: `<app-sigin-form (myEvent)="sigIn($event)"></app-sigin-form>`,
})
export class SiginComponent {
  sigIn(value: any) {
    console.log('entro al evento');
  }
}
