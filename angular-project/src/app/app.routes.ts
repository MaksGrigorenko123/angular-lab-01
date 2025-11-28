import { Routes } from '@angular/router';
import { ItemsListComponent } from './features/items-list/items-list';
import { ItemDetailsComponent } from './features/item-details/item-details';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items' },   // головна → список
  { path: 'items', component: ItemsListComponent },       // список усіх курсів
  { path: 'items/:id', component: ItemDetailsComponent }, // деталі одного курсу
  { path: '**', redirectTo: 'items' },                    // fallback
];
 