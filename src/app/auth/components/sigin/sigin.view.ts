import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';




@Component({
    standalone: true,
    selector: 'app-sigin-form',
    templateUrl: './sigin.view.html',
    styleUrls: ['./sigin.view.scss'],
  imports: [
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class SiginFormComponent {


  @Output() myEvent = new EventEmitter();
  formBuilder = inject(FormBuilder)

  // public formGroup: FormGroup  = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   pass1: new FormControl(''),
  //   pass2: new FormControl(''),
  // });

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    pass1: ['',[Validators.required, Validators.minLength(6)]],
    pass2: ['',[Validators.required, Validators.minLength(6)]],
  },
  {
    validators: this.isValidPass('pass1', 'pass2')
  })

  isValid(value: string): boolean | null{
    const res = this.myForm.controls[value].errors && this.myForm.controls[value].touched;
    return res
  }

  isValidPass(val1: string, val2: string){
    return (formGroup : AbstractControl) : ValidationErrors  | null => {
      const pass1Control = formGroup.get(val1)?.value;
      const pass2Control = formGroup.get(val2)?.value;
    

      if (pass1Control !== pass2Control) {
        formGroup.get(val2)?.setErrors({ notEqual : true});
        return { notEqual : true}
      }
      formGroup.get(val2)?.setErrors(null);
      return null;
    };
  }
  
  
  sigIn() {
    this.myEvent.emit({
      name: this.myForm.controls['name'].value,
      email: this.myForm.controls['email'].value,
      pass: this.myForm.controls['pass1'].value,
    });
    this.myForm.reset({ name: '', email: '', pass1: '', pass2: '' });
  }

}

