import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

import { DataService } from '../../shared/services/data.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.html',
})
export class ItemDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly data  = inject(DataService);

  item$: Observable<Course | undefined> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.data.getItemById$(id))
  );
}
