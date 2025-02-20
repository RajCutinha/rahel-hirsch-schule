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

    previousButton?: HTMLButtonElement;


    scrollToWohnort() {
        const element = document.getElementById('wohnort-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scrollToUnter18() {
        const element = document.getElementById('unter18-section');
        console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scroll(event: MouseEvent) {

        const label = (event.target as HTMLElement).textContent?.trim();
        
        const button = document.getElementById(`${label}`) as HTMLButtonElement;

        if (button){
            if (this.previousButton && this.previousButton !== button){
                this.previousButton.style.backgroundColor = '#00628A';
                this.previousButton.style.color = '#fff';
                this.previousButton.style.border = 'none';
            }

            button.style.backgroundColor = '#fff';
            button.style.color = '#00628A';
            button.style.border = '1px solid #00628A';
        }

   
        const section = label?.toLowerCase() + '-section';
        let element = document.getElementById(section);

        if (element)
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

            this.previousButton = button;
    }
}
