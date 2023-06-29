import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicSvgDirective} from "./dynamic-svg.directive";

@NgModule({
  declarations: [DynamicSvgDirective],
  imports: [
    CommonModule
  ],
  exports: [DynamicSvgDirective]
})
export class DynamicSvgModule {}
