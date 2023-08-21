// https://leetcode.com/problems/permutations/

export function permutations(n) {
    const result = [];

    const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    const permutate = (arr, idx) => {
        for (let i = idx; i < arr.length; i++) {
            const newArr = [...arr];
            swap(newArr, i, idx);
            result.push(newArr);
            permutate(newArr, idx + 1);
        }
    }

    const array = [];

    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    result.push(array);
    
    permutate(array, 0);
    return result;
}
