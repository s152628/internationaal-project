import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguageSelectionComponent } from "./language-selection/language-selection.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LanguageSelectionComponent, ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZAS-WEBSITE';
}
