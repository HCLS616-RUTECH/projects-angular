import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortItemsPipe } from './sort-items.pipe';

@NgModule({
  declarations: [SortItemsPipe],
  imports: [CommonModule],
  exports: [SortItemsPipe],
})
export class SortItemsModule {}
