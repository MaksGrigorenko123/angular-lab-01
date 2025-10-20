import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { Course } from '../../shared/models/course.model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.scss'],
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  course?: Course;

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    // читаємо :id з URL і підвантажуємо курс
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => {
          const id = params.get('id')!;
          return this.data.getItemById$(id);
        })
      )
      .subscribe(course => (this.course = course ?? undefined));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
 