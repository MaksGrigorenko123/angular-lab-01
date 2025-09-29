import { Component, signal } from '@angular/core';
import { ItemsListComponent } from './features/items-list/items-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsListComponent], // RouterOutlet оставляем тоже
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = 'webapp'; // можешь оставить для примера
}   
 