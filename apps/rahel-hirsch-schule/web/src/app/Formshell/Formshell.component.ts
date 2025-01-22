import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './Header/Header.component';
import { NavigationComponent } from "../Navigation/Navigation.component";
import { PersoenlichesComponent } from "../Steps/Person/Persoenliches.component";

@Component({
  imports: [RouterModule, ButtonModule, HeaderComponent, NavigationComponent, PersoenlichesComponent],
  selector: 'app-root',
  templateUrl: './Formshell.component.html',
  styleUrl: './Formshell.component.css',
})
export class FormshellComponent {
  title = 'rahel-hirsch-schule-web';
}
