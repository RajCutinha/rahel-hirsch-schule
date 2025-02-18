import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    imports: [RouterModule, ButtonModule, InputTextModule],
    selector: 'app-wohnort',
    templateUrl: './Wohnort.component.html',
    styleUrl: './Wohnort.component.css'
})
export class WohnortComponent {}
