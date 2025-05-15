import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selection',
  imports: [],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.css'
})
export class LanguageSelectionComponent {
   selectedLanguage = 'en';

  onLanguageChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    console.log('Language selected:', value);
    this.selectedLanguage = value;

    // Add logic to switch language here (e.g., i18n service)
  }
}
