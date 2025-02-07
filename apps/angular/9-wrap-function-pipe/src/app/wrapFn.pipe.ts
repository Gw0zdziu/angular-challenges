import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person.model';

@Pipe({
  name: 'wrapFn',
})
export class WrapFnPipe<T extends Person, C, I> implements PipeTransform {
  transform(value: T, index: C, isFirst: I): any {
    let isAllowed = '';
    if (isFirst) {
      isAllowed = 'always allowed';
    } else {
      isAllowed = value.age > 25 ? 'allowed' : 'declined';
    }
    return `${value.name} - ${index} ${isAllowed}`;
  }
}
