import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent {
  @Input() title =
    'Anmeldung zur Ausbildung als MFA / ZFA an der Rahel-Hirsch-Schule';
}
