import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeafletMapsComponent } from "./leaflet-maps.component";

const routes: Routes = [
  {
    path: '',
    component: LeafletMapsComponent,
  },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeafletMapsRoutingModule {}
