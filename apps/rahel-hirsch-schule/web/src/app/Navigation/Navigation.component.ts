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
        const element = document.getElementById('unter18-section');
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scroll(event: MouseEvent){
        const label = (event.target as HTMLElement).textContent?.trim();
        console.log(label)
        const section = label?.toLowerCase() + '-section'
        let element = document.getElementById(section);

        console.log(section)

        if(element)
        switch (label) {
            case 'Persönliches':
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Wohnort':
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Unter 18?':
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Ausbildung':
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Schulbesuch':
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Datenschutz':
                element.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                element = document.getElementById('persönliches-section');
                break;
        }
            
    }

}
