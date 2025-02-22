import { Component } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    imports: [ButtonModule, InputTextModule, ReactiveFormsModule],
    selector: 'app-wohnort',
    templateUrl: './Wohnort.component.html',
    styleUrl: './Wohnort.component.scss'
})
export class WohnortComponent {
    constructor(private controlContainer: ControlContainer) {}

    get parentForm() {
        return this.controlContainer.control;
    }

    get personPlaceForm() {
        return this.parentForm?.get('personPlace') as FormGroup;
    }

    get emergencyContactForm() {
      return this.parentForm?.get('emergencyContact') as FormGroup;
    }
}
