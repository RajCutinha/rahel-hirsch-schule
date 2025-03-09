import { Component } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

@Component({
    imports: [ButtonModule, ReactiveFormsModule],
    selector: 'app-bestaetigung',
    templateUrl: './Bestaetigung.component.html',
    styleUrl: './Bestaetigung.component.css'
})
export class BestaetigungComponent {
  constructor(private controlContainer: ControlContainer) {}

  get parentForm() {
    return this.controlContainer.control as FormGroup;
  }

  get confirmationForm() {
    return this.parentForm?.get('confirmation') as FormGroup;
  }
}
