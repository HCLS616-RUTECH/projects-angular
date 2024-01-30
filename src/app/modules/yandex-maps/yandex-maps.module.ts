import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YandexMapsComponent} from './yandex-maps.component';
import {YandexMapsRoutingModule} from "./yandex-maps-routing.module";

@NgModule({
  declarations: [
    YandexMapsComponent
  ],
  imports: [
    CommonModule,
    YandexMapsRoutingModule
  ]
})
export class YandexMapsModule {
}
