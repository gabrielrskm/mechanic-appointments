import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const ICON_GOOGLE = '../assets/google.svg';
const ICON_FACEBOOK = '../assets/face.svg';
const ICON_GITHUB = '../assets/github.svg';

@Component({
    standalone: true,
    selector: 'app-pop-up-form',
    templateUrl: './popup.view.html',
    imports: [MatIconModule,CommonModule,MatButtonModule]
})
export class PopUpFormComponent {
   @Input() type: string = '';
   @Output() buttonEvent = new EventEmitter();

   constructor(
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer
   ) {
      iconRegistry.addSvgIcon(
         'facebook',
         sanitizer.bypassSecurityTrustResourceUrl(ICON_FACEBOOK)
      );
      
      iconRegistry.addSvgIcon(
         "google",
         sanitizer.bypassSecurityTrustResourceUrl(ICON_GOOGLE)
      );
      
      iconRegistry.addSvgIcon(
         "github",
         sanitizer.bypassSecurityTrustResourceUrl(ICON_GITHUB)
       );
      
   }

   click() {
      this.buttonEvent.emit();
   }
}
