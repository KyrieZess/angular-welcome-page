import { Component } from '@angular/core';
import { TwpButton } from './twp-button/twp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TwpButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-welcome-page';
}
