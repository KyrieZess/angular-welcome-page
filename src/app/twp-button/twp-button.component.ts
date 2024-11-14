import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twp-button',
  standalone: true,
  imports: [],
  templateUrl: './twp-button.component.html',
  styleUrl: './twp-button.component.css'
})
export class TwpButton {
  @Input() buttonLabel = "";

  onClick(): void{
    console.log("OnClick:" + this.buttonLabel);
  }
}
