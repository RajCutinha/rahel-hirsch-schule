import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  imports: [RouterModule, ButtonModule],
  selector: 'app-navigation',
  templateUrl: './Navigation.component.html',
  styleUrl: './Navigation.component.css',
})
export class NavigationComponent {
  

}