import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    imports: [RouterModule, ButtonModule, InputTextModule],
    selector: 'app-unter18',
    templateUrl: './Unter18.component.html',
    styleUrl: './Unter18.component.scss'
})
export class Unter18Component {}
