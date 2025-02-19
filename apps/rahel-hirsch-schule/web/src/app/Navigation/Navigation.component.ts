import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    imports: [RouterModule, ButtonModule],
    selector: 'app-navigation',
    templateUrl: './Navigation.component.html',
    styleUrl: './Navigation.component.scss'
})
export class NavigationComponent {
    scrollToWohnort() {
        const element = document.getElementById('wohnort-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scrollToUnter18() {
        const element = document.getElementById('uneter18-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
