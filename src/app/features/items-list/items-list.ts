import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ додано
import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ RouterModule додано
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss'],
})
export class ItemsListComponent implements OnInit {
  items: Course[] = [];
  searchTerm = ''; // ✅ поле для ngModel

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }

  // ✅ простий фільтр без пайпа
  get filtered(): Course[] {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) return this.items;
    return this.items.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.lang.toLowerCase().includes(q) ||
        (c.tags ?? []).some((t) => t.toLowerCase().includes(q))
    );
  }
}
 