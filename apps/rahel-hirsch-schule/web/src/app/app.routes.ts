import { Route } from '@angular/router';
import { FormshellComponent } from './Formshell/Formshell.component';
import { NavigationComponent } from './Navigation/Navigation.component'

export const appRoutes: Route[] = [
  {
    path: '',
    component: FormshellComponent,
  },
  {
    path: '',
    component: NavigationComponent,
  },
];
