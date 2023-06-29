import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProjectsNamesEnum} from "../../shared/enums/projects-names.enum";
import {finalize, Observable, tap} from "rxjs";
import {ProjectCard} from "./sources/models/project-card.model";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {MainPageHttpService} from "./services/main-page.http.service";
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CacheService} from "../../shared/services/cache.service";
import {MainPageCacheModel} from "./sources/models/main-page-cache.model";

@UntilDestroy()
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  cards$!: Observable<ProjectCard[]>;
  form: FormGroup;

  isLoading = true;

  private readonly _filterKeys = ['name', 'description', 'technologies'];
  private readonly _path = ProjectsNamesEnum.ALL_PROJECTS_CARDS;

  constructor(private readonly _mainPageHttpService: MainPageHttpService,
              private readonly _router: Router,
              private readonly _fb: FormBuilder,
              private readonly _cacheService: CacheService<MainPageCacheModel>,
  ) {
    this.form = this._initForm(_fb);
    this.form.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        Object.keys(value).forEach(key => {
          this._cacheService.setCache(key as keyof MainPageCacheModel, value[key]);
        });
      });
  }

  ngOnInit(): void {
    this.cards$ = this._mainPageHttpService.getProjectsCards(this._path)
      .pipe(
        untilDestroyed(this),
        tap(() => this.isLoading = false)
      );
  }

  get sortValue(): 'empty' | 'ascend' | 'descend' {
    return this.form.getRawValue().sort;
  }

  get filterValue(): string {
    return this.form.getRawValue().filter;
  }

  get filterKeys(): string[] {
    return this._filterKeys;
  }

  handleNavigateToProject(path: string): void {
    this._router.navigate([path]).then();
  }

  private _initForm(fb: FormBuilder): FormGroup {
    const controls = Object.keys(this._cacheService.cache).length
      ? this._cacheService.cache
      : {
          filter: '',
          sort: 'empty',
      }

    return fb.group(controls);
  }
}

