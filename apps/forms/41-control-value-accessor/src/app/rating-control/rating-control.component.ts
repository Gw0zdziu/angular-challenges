import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-rating-control',
  templateUrl: 'rating-control.component.html',
  styleUrls: ['rating-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingControlComponent,
      multi: true,
    },
  ],
})
export class RatingControlComponent implements ControlValueAccessor {
  @Input() value: number = 0;
  onChange = (value: number) => {};
  onTouched = () => {};
  isDisabled = false;
  writeValue(index: number): void {
    this.value = index + 1;
    this.onChange(this.value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  isStarActive(index: number, value: number | null): boolean {
    return value ? index < value : false;
  }
}
