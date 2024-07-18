import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [TextComponent,RouterOutlet],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

}