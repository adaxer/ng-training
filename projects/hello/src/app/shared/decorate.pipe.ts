import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorate'
})
export class DecoratePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value as string != undefined) {
      return `[[${value as string}]]`;
    }
    return value;
  }

}
