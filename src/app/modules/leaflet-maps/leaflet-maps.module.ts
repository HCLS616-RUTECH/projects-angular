import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletMapsComponent } from './leaflet-maps.component';
import { LeafletMapsRoutingModule } from "./leaflet-maps-routing.module";
import {NewPageSoonModule} from "../../shared/components/new-page-soon/new-page-soon.module";



@NgModule({
  declarations: [
    LeafletMapsComponent
  ],
  imports: [
    CommonModule,
    LeafletMapsRoutingModule,
    NewPageSoonModule
  ]
})
export class LeafletMapsModule { }
