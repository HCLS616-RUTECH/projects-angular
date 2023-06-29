import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YandexMapsComponent } from './yandex-maps.component';
import { YandexMapsRoutingModule } from "./yandex-maps-routing.module";
import {NewPageSoonModule} from "../../shared/components/new-page-soon/new-page-soon.module";

@NgModule({
  declarations: [
    YandexMapsComponent
  ],
  imports: [
    CommonModule,
    YandexMapsRoutingModule,
    NewPageSoonModule
  ]
})
export class YandexMapsModule {}
