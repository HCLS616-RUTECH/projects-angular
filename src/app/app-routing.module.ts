import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'kanban-fire-todo',
    loadChildren: () =>
      import('./modules/kanban-fire-todo/kanban-fire-todo.module').then((m) => m.KanbanFireTodoModule),
  },
  {
    path: 'fake-store',
    loadChildren: () =>
      import('./modules/fake-store/fake-store.module').then((m) => m.FakeStoreModule),
  },
  {
    path: 'yandex-maps',
    loadChildren: () =>
      import('./modules/yandex-maps/yandex-maps.module').then((m) => m.YandexMapsModule),
  },
  {
    path: 'leaflet-maps',
    loadChildren: () =>
      import('./modules/leaflet-maps/leaflet-maps.module').then((m) => m.LeafletMapsModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
