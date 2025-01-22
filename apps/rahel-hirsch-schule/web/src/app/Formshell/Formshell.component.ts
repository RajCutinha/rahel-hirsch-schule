import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './Header/Header.component';

@Component({
  imports: [RouterModule, ButtonModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './Formshell.component.html',
  styleUrl: './Formshell.component.css',
})
export class FormshellComponent {
  title = 'rahel-hirsch-schule-web';
}
