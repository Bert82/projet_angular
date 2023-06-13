import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(type: string): string {
    switch (type) {
      case 'rando':
        return 'blue'; 
      case 'treck':
        return 'green'; 
      case 'marathon':
        return 'red'; 
      default:
        return ''; 
    }
  }

}
