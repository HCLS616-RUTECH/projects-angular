import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, tap } from 'rxjs';
import { MultiPlatform } from '../../shared/decorators/milti-platform.decorator';
import { ProjectsNamesEnum } from '../../shared/enums/projects-names.enum';
import { TSortDirection } from '../../shared/models/types/sort/sort-direction.type';
import { CacheService } from '../../shared/services/cache.service';
import { MainPageHttpService } from './services/main-page.http.service';
import { ProjectCard } from './sources/models/project-card.model';

type TLocalFormControls = {
  filter: string;
  sort: TSortDirection;
};

@UntilDestroy()
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  @MultiPlatform({ width: 594 }) isMobile = false;

  cards$: Observable<ProjectCard[]>;
  form: FormGroup;

  isLoading = true;

  private readonly _filterKeys: Array<keyof ProjectCard> = [
    'name',
    'description',
    'technologies',
  ];
  private readonly _path = ProjectsNamesEnum.ALL_PROJECTS_CARDS;

  constructor(
    private readonly _mainPageHttpService: MainPageHttpService,
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _cacheService: CacheService<TLocalFormControls>
  ) {
    this.form = this._initForm(this._fb);
    this.form.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: TLocalFormControls) => {
        const keys = Object.keys(value) as Array<keyof TLocalFormControls>;

        keys.forEach((key) => {
          this._cacheService.setCache(key, value[key]);
        });
      });

    this.cards$ = this._mainPageHttpService.getProjectsCards(this._path).pipe(
      untilDestroyed(this),
      tap(() => (this.isLoading = false))
    );
  }

  get sortValue(): TSortDirection {
    return this.form.getRawValue().sort;
  }

  get filterValue(): string {
    return this.form.getRawValue().filter;
  }

  get filterKeys(): Array<keyof ProjectCard> {
    return this._filterKeys;
  }

  handleNavigateToProject(path: string): void {
    this._router.navigate([path]).then();
  }

  private _initForm(fb: FormBuilder): FormGroup {
    const controls: TLocalFormControls = Object.keys(this._cacheService.cache)
      .length
      ? this._cacheService.cache
      : {
          filter: '',
          sort: 'empty',
        };

    return fb.group(controls);
  }
}
