import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'control-panel-sort',
  templateUrl: './control-panel-sort.component.html',
  styleUrls: ['./control-panel-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlPanelSortComponent),
      multi: true,
    },
  ],
})
export class ControlPanelSortComponent implements ControlValueAccessor {
  private _value: string = '';

  constructor(private readonly _cdRef: ChangeDetectorRef) {}

  get value(): string {
    return this._value;
  }

  onChange = (value: any) => {};

  onTouched = () => {};

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: string): void {
    this._value = value;
    this._cdRef.markForCheck();
  }

  setValue($event: string): void {
    this._value = $event;
    this.onChange(this._value);
  }

}
