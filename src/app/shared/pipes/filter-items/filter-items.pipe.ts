import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterItems' })
export class FilterItemsPipe implements PipeTransform {
    transform(list: any, keys: string[], query: string): any {
        if (Array.isArray(list)) {
            if (!query?.trim()) {
                return list;
            }

            return list.filter((item) => {
                let isItemContainsQuery = false;
                for (let i = 0; i < keys.length; i++) {
                    if (isItemContainsQuery) {
                        i = keys.length;
                    } else {
                        isItemContainsQuery = item[keys[i]]
                            .toString()
                            .toLowerCase()
                            .includes(query.toLowerCase());
                    }
                }
                return isItemContainsQuery;
            });
        }

        return list;
    }
}
