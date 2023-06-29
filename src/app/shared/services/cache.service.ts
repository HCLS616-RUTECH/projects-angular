import { Inject, Injectable } from '@angular/core';

@Injectable()
export class CacheService<T extends object> {
    private _cacheFieldName = 'CACHE';
    private _cache: T;

    constructor(@Inject(String) private cacheFieldName?: string) {
        if (cacheFieldName) {
            this._cacheFieldName = cacheFieldName;
        }

        const cache = localStorage.getItem(this._cacheFieldName);
        this._cache = cache ? JSON.parse(cache) : {};
    }

    get cache(): T {
        return this._cache;
    }

    setCache<S extends keyof T>(key: S, value: T[S]): void {
        this._cache[key] = value;
        localStorage.setItem(this._cacheFieldName, JSON.stringify(this._cache));
    }

    getValue<S extends keyof T & string>(key: S): any {
        // Если в объекте кэша сразу имеется необходимое поле
        // Пример: this._cacheService.getValue('probe');
        if (this._cache.hasOwnProperty(key)) {
            return this._cache[key];
        }
        // Если в объекте кэша имеется вложенность и необходимое поле требуется получить по маршруту
        // Пример: this._cacheService.getValue('probe.probe.probe');
        if (key.includes('.')) {
            return this._getValueByRoute(key);
        }
        // Если в объекте кэша имеется вложенность и необходимое поле требуется получить без маршрута
        // Пример: this._cacheService.getValue('probe');
        // Важно: Если в поле probe будет вложено еще одно поле с таким же названием (probe: {probe: '...'}) parseCache вернет первое найденное поле
        return this._parseCache(key, this._cache);
    }

    clearCache<S extends keyof T>(key: S): void {
        delete this._cache[key];

        localStorage.setItem(this._cacheFieldName, JSON.stringify(this._cache));
    }

    private _getValueByRoute(route: string): any {
        try {
            return eval(`this._cache.${route}`);
        } catch (error) {
            return null;
        }
    }

    private _parseCache(key: string, cachePart: any): any {
        let value: any = null;
        const keysArray = Object.keys(cachePart);

        for (let i = 0; i < keysArray.length; i++) {
            if (typeof cachePart[keysArray[i]] === 'object' && cachePart[keysArray[i]] !== null) {
                if (cachePart[keysArray[i]].hasOwnProperty(key)) {
                    return cachePart[keysArray[i]][key];
                }
                value = this._parseCache(key, cachePart[keysArray[i]]);
            }
        }

        return value;
    }
}
