import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    imports: [RouterModule, ButtonModule, InputTextModule],
    selector: 'app-ausbildung',
    templateUrl: './Ausbildung.component.html',
    styleUrl: './Ausbildung.component.scss'
})
export class AusbildungComponent {}
