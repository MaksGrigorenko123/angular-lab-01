import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ItemsListComponent } from './items-list';                  // ✅ правильний імпорт компонента
import { DataService } from '../../shared/services/data.service';   // ✅ сервіс для моку

// ✅ простий мок сервісу: Observable з порожнім списком + заглушка фільтрації
const dataServiceStub = {
  getItems: () => of([]),
  filterByQuery: (_q: string) => {}
};

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Standalone-компонент підключається через imports
      imports: [ItemsListComponent],
      // Підміняємо реальний сервіс на мок
      providers: [{ provide: DataService, useValue: dataServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 