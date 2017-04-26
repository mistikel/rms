import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByAscDesc'
})
export class OrderByAscDesc implements PipeTransform {

  transform(array: Array<string>, orderType: boolean, args: string): Array<string> {

    if (!array || array === undefined || array.length === 0) return null;

    if (orderType) {
      array.sort((a: any, b: any) => {
        if (a.lastName < b.lastName) {
          return -1;
        } else if (a.lastName > b.lastName) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    } else {
      array.sort((a: any, b: any) => {
        if (a.lastName > b.lastName) {
          return -1;
        } else if (a.lastName < b.lastName) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }

  }

}