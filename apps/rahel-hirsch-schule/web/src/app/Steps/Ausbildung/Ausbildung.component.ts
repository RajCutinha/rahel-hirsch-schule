import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    imports: [RouterModule, ButtonModule, InputTextModule, ReactiveFormsModule],
    selector: 'app-ausbildung',
    templateUrl: './Ausbildung.component.html',
    styleUrl: './Ausbildung.component.css'
})
export class AusbildungComponent {

  schooldays = [
    { value: 'Mo/Di', label: 'Mo/Di' },
    { value: 'Di/Mi', label: 'Di/Mi' },
    { value: 'Di/Fr', label: 'Di/Fr' },
    { value: 'Mo/Do', label: 'Mo/Do' },
    { value: 'Mo/Fr', label: 'Mo/Fr' },
    { value: 'Mo/Mi', label: 'Mo/Mi' },
    { value: 'Do/Fr', label: 'Do/Fr' },
    { value: 'Mi/Do', label: 'Mi/Do' }
  ];

  constructor(private controlContainer: ControlContainer) {}

  get parentForm() {
    return this.controlContainer.control as FormGroup;
  }

  get employerForm() {
    return this.parentForm?.get('employer') as FormGroup;
  }

  get schooldaysControl() {
    return this.parentForm?.get('schooldays') as FormControl;
  }

  get contractFileControl() {
    return this.parentForm?.get('contractFile') as FormControl;
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);

    if (file) {
      this.contractFileControl?.setValue(file);
    } else {
      this.contractFileControl?.setValue(null);
    }
  }

  updateSchooldays(event: Event) {
    const target = event.target as HTMLInputElement;

    if (!target) return;

    const value = target.value;
    const currentValues = this.schooldaysControl.value || [];

    if (target.checked) {
      this.schooldaysControl.setValue([...currentValues, value]);
    } else {
      this.schooldaysControl.setValue(currentValues.filter((v: string) => v !== value));
    }
  }
}
