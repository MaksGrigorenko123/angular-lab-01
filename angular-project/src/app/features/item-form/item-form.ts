import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ]
})
export class ItemFormComponent {

  showPopupError = '';

  constructor(private dataService: DataService, private router: Router) {}

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    category: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),

    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),

    duration: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern(/^[0-9]+$/)
    ]),

    price: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)
    ]),
  });

  submit() {
    if (this.form.invalid) {
      this.showPopupError = 'Форма містить помилки. Перевірте введені дані!';
      return;
    }

    this.dataService.addItem(this.form.value);
    this.router.navigate(['/items']);
  }

  closePopup() {
    this.showPopupError = '';
  }
}
