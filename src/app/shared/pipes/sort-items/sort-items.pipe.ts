import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortItems'
})
export class SortItemsPipe implements PipeTransform {

  transform(list: any, key: string, query: 'empty' | 'ascend' | 'descend', sortType: 'string' | 'number' | 'date' = 'string'): any {
    if (Array.isArray(list)) {
      if (query === 'empty') {
        return list;
      }

      return list.slice().sort((a, b) => {
        let _a = a[key];
        let _b = b[key];

        switch (sortType) {
          case 'string':
            _a = _a?.toString().trim() || '';
            _b = _b?.toString().trim() || '';
            return query === 'ascend'
              ? (_b as string).localeCompare(_a as string)
              : (_a as string).localeCompare(_b as string);
          case 'number':
            _a = isNaN(+_a) ? 0 : +_a;
            _b = isNaN(+_b) ? 0 : +_b;
            return this._compareNumbers(_a as number, _b as number, query);
          case 'date':
            _a = this._transformDateToNumber(_a);
            _b = this._transformDateToNumber(_b);
            return this._compareNumbers(_a as number, _b as number, query);
        }
      });

    }

    return list;
  }

  private _compareNumbers(currentA: number, currentB: number, query: 'ascend' | 'descend'): 1 | -1 | 0 {
    switch (true) {
      case currentA > currentB || !currentB:
        return query === 'ascend' ? 1 : -1;
      case currentA < currentB || !currentA:
        return query === 'ascend' ? -1 : 1;
      default:
        return 0;
    }
  }

  private _transformDateToNumber(date: string | Date): number {
    let value = 0;
    switch (typeof date) {
      case 'string':
        value = Date.parse(date);
        if (isNaN(value)) {
          value = 0;
        }
        break;
      case 'object':
        if (date instanceof Date && !isNaN(date.getTime())) {
          value = date.getTime();
        }
        break;
    }
    return value;
  }

}
