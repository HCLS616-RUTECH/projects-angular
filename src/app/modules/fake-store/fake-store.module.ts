import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeStoreComponent } from './fake-store.component';
import {FakeStoreRoutingModule} from "./fake-store-routing.module";
import {NewPageSoonModule} from "../../shared/components/new-page-soon/new-page-soon.module";

@NgModule({
  declarations: [
    FakeStoreComponent
  ],
    imports: [
        CommonModule,
        FakeStoreRoutingModule,
        NewPageSoonModule
    ]
})
export class FakeStoreModule {}
