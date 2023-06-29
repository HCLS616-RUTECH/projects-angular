import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KanbanFireTodoComponent} from "./kanban-fire-todo.component";

const routes: Routes = [
  {
    path: '',
    component: KanbanFireTodoComponent,
  },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KanbanFireTodoRoutingModule {}
