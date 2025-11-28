import { Routes } from '@angular/router';
import { ItemsListComponent } from './features/items-list/items-list';
import { ItemDetailsComponent } from './features/item-details/item-details';
import { ItemFormComponent } from './features/item-form/item-form';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items' },

  { path: 'items', component: ItemsListComponent },

  { path: 'items/create', component: ItemFormComponent },

  { path: 'items/:id', component: ItemDetailsComponent },

  { path: '**', redirectTo: 'items' }
];
