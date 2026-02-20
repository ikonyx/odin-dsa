import {mergeSort} from "./mergeSort.js";

test('merge sort on an empty array', () => {
    expect(mergeSort([])).toEqual([]);
});

test('merge sort an array of one element', () => {
    expect(mergeSort([85])).toEqual([85]);
});

test('merge sort on a sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('merge sort an unsorted array of two sorted halves', () => {
    expect(mergeSort([2, 55, 68, 1, 40, 52])).toEqual([1, 2, 40, 52, 55, 68]);
});

test('merge sort an unsorted array', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 1])).toEqual([1, 1, 2, 3, 5, 8, 13]);
});

test('merge sort an unsorted array', () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});
