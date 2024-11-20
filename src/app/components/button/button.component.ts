import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = ''; // Texto do botão
  @Input() type: 'primary' | 'secondary' = 'primary'; // Tipo do botão
  @Input() link: string = ''; // URL ou rota
}
