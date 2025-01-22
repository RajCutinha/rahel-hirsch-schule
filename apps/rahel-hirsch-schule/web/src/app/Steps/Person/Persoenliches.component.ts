import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@Component({
  imports: [RouterModule, ButtonModule, InputTextModule],
  selector: 'app-persoenliches',
  templateUrl: './Persoenliches.component.html',
  styleUrl: './Persoenliches.component.css',

})
export class PersoenlichesComponent {
  

}