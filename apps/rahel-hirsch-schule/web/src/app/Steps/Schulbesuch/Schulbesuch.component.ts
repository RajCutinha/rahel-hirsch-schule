import { Component } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule],
  selector: 'app-schulbesuch',
  templateUrl: './Schulbesuch.component.html',
  styleUrl: './Schulbesuch.component.scss'
})
export class SchulbesuchComponent {
  constructor(private controlContainer: ControlContainer) {}

  get parentForm() {
    return this.controlContainer.control as FormGroup;
  }

  get educationForm() {
    return this.parentForm?.get('education') as FormGroup;
  }
}
