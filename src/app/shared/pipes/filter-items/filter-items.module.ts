import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterItemsPipe} from "./filter-items.pipe";

@NgModule({
    declarations: [FilterItemsPipe],
    imports: [CommonModule],
    exports: [FilterItemsPipe]
})
export class FilterItemsModule {}
