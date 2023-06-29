import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FakeStoreComponent} from "./fake-store.component";

const routes: Routes = [
  {
    path: '',
    component: FakeStoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FakeStoreRoutingModule {}
