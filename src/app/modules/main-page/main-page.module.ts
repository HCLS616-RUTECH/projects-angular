import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {MainPageRoutingModule} from './main-page-routing.module';
import { ProjectCardComponent } from './sub-components/project-card/project-card.component';
import {MainPageHttpService} from "./services/main-page.http.service";
import {MatIconModule} from "@angular/material/icon";
import {DynamicSvgModule} from "../../shared/directives/dynamic-svg/dynamic-svg.module";
import {ControlPanelDesktopComponent} from "./sub-components/control-panel-desktop/control-panel-desktop.component";
import { ControlPanelFilterComponent } from './sub-components/ui/control-panel-filter/control-panel-filter.component';
import { ControlPanelSortComponent } from './sub-components/ui/control-panel-sort/control-panel-sort.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterItemsModule} from "../../shared/pipes/filter-items/filter-items.module";
import {CacheService} from "../../shared/services/cache.service";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {SortItemsModule} from "../../shared/pipes/sort-items/sort-items.module";
import {PageLoaderModule} from "../../shared/components/page-loader/page-loader.module";

@NgModule({
  declarations: [MainPageComponent, ProjectCardComponent, ControlPanelDesktopComponent, ControlPanelFilterComponent, ControlPanelSortComponent],
    imports: [
        CommonModule,
        MainPageRoutingModule,
        MatIconModule,
        DynamicSvgModule,
        FormsModule,
        ReactiveFormsModule,
        FilterItemsModule,
        MatOptionModule,
        MatSelectModule,
        SortItemsModule,
        PageLoaderModule
    ],
  providers: [MainPageHttpService, {provide: CacheService, useFactory: () => new CacheService('MAIN_PAGE_CACHE')}]
})
export class MainPageModule { }
