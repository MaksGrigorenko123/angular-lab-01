import { Component } from '@angular/core';
import { ItemsList } from '../features/items-list/items-list'; 

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ItemsList], 
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class LayoutComponent {
  siteTitle: string = 'Проект 1';
  year: number = new Date().getFullYear();
  designerName: string = 'Макс Григоренко ІТ-32/2';
}
 