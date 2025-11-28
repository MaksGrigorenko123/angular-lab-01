import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css'],
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterModule
  ]
})
export class ItemFormComponent {

  constructor(private dataService: DataService, private router: Router) {}

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    duration: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  submit() {
    if (this.form.invalid) return;

    this.dataService.addItem(this.form.value);
    this.router.navigate(['/items']);
  }
}
