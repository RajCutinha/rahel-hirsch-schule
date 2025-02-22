import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    imports: [ButtonModule, InputTextModule, ReactiveFormsModule],
    selector: 'app-unter18',
    templateUrl: './Unter18.component.html',
    styleUrl: './Unter18.component.scss'
})
export class Unter18Component {
  constructor(private controlContainer: ControlContainer) {}

  get parentForm() {
    return this.controlContainer.control as FormGroup;
  }

  get motherForm() {
    return this.parentForm?.get('mother') as FormGroup;
  }

  get fatherForm() {
    return this.parentForm?.get('father') as FormGroup;
  }

  get guardianForm() {
    return this.parentForm?.get('guardian') as FormGroup;
  }

  get guardianAddressControl() {
    return this.parentForm?.get('guardianAddress') as FormControl;
  }
}
