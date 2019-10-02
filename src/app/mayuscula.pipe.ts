import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (args && typeof args === 'number') {
      return value.substring(0, args).toUpperCase() + value.substr(args);
    } else {
      return value.toUpperCase();
    }
  }

}
