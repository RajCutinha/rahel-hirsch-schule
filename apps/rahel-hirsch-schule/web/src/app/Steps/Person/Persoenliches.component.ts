import { Component } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  imports: [RouterModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  selector: 'app-persoenliches',
  templateUrl: './Persoenliches.component.html',
  styleUrl: './Persoenliches.component.scss'
})
export class PersoenlichesComponent {
  constructor(private controlContainer: ControlContainer) {}

  get parentForm() {
    return this.controlContainer.control;
  }

  get personForm() {
    return this.parentForm?.get('person') as FormGroup;
  }
}
