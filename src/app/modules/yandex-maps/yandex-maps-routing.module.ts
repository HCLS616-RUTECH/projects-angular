import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YandexMapsComponent} from "./yandex-maps.component";

const routes: Routes = [
  {
    path: '',
    component: YandexMapsComponent,
  },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YandexMapsRoutingModule {}
