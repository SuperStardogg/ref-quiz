import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearchResults'
})
export class FilterSearchResultsPipe implements PipeTransform {

  /**
   * Transform
   *
   * @param {string[]} items
   * @param {string} searchText
   * @returns {string[]}
   */
   transform(items: string[], searchText: string): string[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
