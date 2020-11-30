import { Pipe, PipeTransform } from '@angular/core';
import {User} from './interfaces';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    const filteredItems = [];

    items.forEach(item => {
      if (item.firstName.toLowerCase().includes(searchText) || item.lastName.toLowerCase().includes(searchText) || item.birthDate.includes(searchText) || item.status.toLowerCase().includes(searchText)) {
        filteredItems.push(item);
      }
    });
    console.log(searchText);
    return filteredItems;
  }

}
