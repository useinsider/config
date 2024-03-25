import { merge as tsMerge } from 'ts-deepmerge';

export function merge<T extends NonNullable<unknown>[]> (...args: T): T[number] {
    return tsMerge.withOptions({ mergeArrays: false }, ...args) as unknown as T;
}
