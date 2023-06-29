import {Directive, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[DynamicSvg]'
})
export class DynamicSvgDirective {
  @Input() set svg(svg: string) {
    if (!svg) {
      return;
    }

    if (!svg.includes('svg')) {
      this._svgContainer.nativeElement.textContent = svg;
      return;
    }

    this._svgContainer.nativeElement.innerHTML = svg;
  };

  constructor(private readonly _svgContainer: ElementRef) {}
}
