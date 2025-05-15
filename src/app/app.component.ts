import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguageSelectionComponent } from "./language-selection/language-selection.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LanguageSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ZAS-WEBSITE';
}
