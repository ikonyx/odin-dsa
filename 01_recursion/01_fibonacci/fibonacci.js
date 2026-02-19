export function fibs(n) {
    if (n < 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1]

    let array = [0, 1];
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
};

export function fibsRec(n) {
    if (n < 0) return [];
    if (n <= 1) return [0];
    if (n === 2) return [0, 1];

    const array = fibsRec(n - 1);   
    const nextNum = array.at(-1) + array.at(-2);  
    array.push(nextNum);            
    return array;                   
}
