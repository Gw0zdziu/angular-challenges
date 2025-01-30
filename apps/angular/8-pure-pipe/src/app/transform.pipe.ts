import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformText',
  standalone: true,
  pure: true,
})
export class TransformPipe implements PipeTransform {
  transform(value: string, index: number) {
    return `${value} - ${index}`;
  }
}
