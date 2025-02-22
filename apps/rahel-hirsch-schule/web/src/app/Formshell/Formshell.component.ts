import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './Header/Header.component';
import { NavigationComponent } from '../Navigation/Navigation.component';
import { PersoenlichesComponent } from '../Steps/Person/Persoenliches.component';
import { WohnortComponent } from '../Steps/Wohnort/Wohnort.component';
import { Unter18Component } from '../Steps/Unter18/Unter18.component';
import { AusbildungComponent } from '../Steps/Ausbildung/Ausbildung.component';
import { SchulbesuchComponent } from '../Steps/Schulbesuch/Schulbesuch.component';
import { BestaetigungComponent } from '../Steps/Bestaetigung/Bestaetigung.component';

@Component({
    imports: [
        RouterModule,
        ButtonModule,
        HeaderComponent,
        NavigationComponent,
        PersoenlichesComponent,
        WohnortComponent,
        Unter18Component,
        AusbildungComponent,
        SchulbesuchComponent,
        BestaetigungComponent,
        ReactiveFormsModule
    ],
    selector: 'app-root',
    templateUrl: './Formshell.component.html',
    styleUrl: './Formshell.component.scss'
})
export class FormshellComponent {
    registrationForm = new FormGroup({
      person: new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        birthday: new FormControl('', Validators.required),
        nationality: new FormControl('', Validators.required),
        countryofBirth: new FormControl('', Validators.required),
        birthplace: new FormControl('', Validators.required),
        adult: new FormControl(''),
        phoneNumber: new FormControl(''),
        telephone: new FormControl(''),
        email: new FormControl(''),
        pictureOk: new FormControl(''),
        originLanguage: new FormControl('')
      }),
      personPlace: new FormGroup({
        postcode: new FormControl('', Validators.required),
        place: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        housenumber: new FormControl('', Validators.required),
        doorbellName: new FormControl('', Validators.required),
        landlord: new FormControl('', Validators.required),
      }),
      emergencyContact: new FormGroup({
        name: new FormControl(''),
        phoneNumber: new FormControl(''),
      }),
      mother: new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        telephone: new FormControl(''),
      }),
      father: new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        telephone: new FormControl(''),
      }),
      guardianAddress: new FormControl(''),
      guardian: new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        telephone: new FormControl('')
      }),
      employer: new FormGroup({
        employerName: new FormControl('', Validators.required),
        employerStreet: new FormControl('', Validators.required),
        employerStreetNumber: new FormControl('', Validators.required),
        employerContactPerson: new FormControl('', Validators.required),
        employerEmail: new FormControl('', [Validators.required, Validators.email]),
        employerPhoneNumber: new FormControl('', Validators.required),
        employerFaxNumber: new FormControl('', Validators.required),
        employerType: new FormControl(''),
      }),
      schooldays: new FormControl<string[]>([], Validators.required),
      contractFile: new FormControl<File | null>(null, Validators.required),
      education: new FormGroup({
        degree: new FormControl('', Validators.required),
        lastSchool: new FormControl(''),
        graduationYear: new FormControl('', Validators.required),
        graduationType: new FormControl('', Validators.required),
        graduationTraining: new FormControl(''),
        newMember: new FormControl(''),
    })
  })

  registrationSubmit() {
    console.log(this.registrationForm.value);
  }
}
