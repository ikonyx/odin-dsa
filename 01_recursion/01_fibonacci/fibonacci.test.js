import {fibs, fibsRec} from "./fibonacci.js";

test('fibonacci solution through iteration for n = 8', () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('fibonacci solution through iteration for n = 1', () => {
    expect(fibs(1)).toEqual([0]);
});

test('fibonacci solution through iteration for n = 2', () => {
    expect(fibs(2)).toEqual([0,1]);
});

test('fibonacci solution through recursion for n = 7', () => {
    expect(fibsRec(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test('fibonacci solution through recursion for n = 0', () => {
    expect(fibsRec(0)).toEqual([0]);
});

test('fibonacci solution through recursion for n = 2', () => {
    expect(fibsRec(2)).toEqual([0,1]);
});

