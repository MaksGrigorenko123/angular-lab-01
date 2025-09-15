import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',        // было './layout.component.html' — ИСПРАВИЛИ
  styleUrls: ['./layout.scss']         // было './layout.component.scss' — ИСПРАВИЛИ
})
export class LayoutComponent {
  siteTitle: string = 'Проєкт 1';
  year: number = new Date().getFullYear();
  designerName: string = 'Макс Григоренко ІТ-32/2';
}
