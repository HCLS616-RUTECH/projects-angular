import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KanbanFireTodoRoutingModule} from "./kanban-fire-todo-routing.module";
import { KanbanFireTodoComponent } from './kanban-fire-todo.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCardModule} from "@angular/material/card";
import {TaskComponent} from "./sub-components/task/task.component";
import {TaskDialogComponent} from "./sub-components/task-dialog/task-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    KanbanFireTodoComponent,
    TaskComponent,
    TaskDialogComponent,
  ],
  imports: [
    CommonModule,
    KanbanFireTodoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class KanbanFireTodoModule { }
