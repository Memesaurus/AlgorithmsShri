// https://sortvisualizer.com/selectionsort/
// https://en.wikipedia.org/wiki/Selection_sort

export function selectionSort(arr) {
    const swap = (a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }

            swap(i, minIdx);
        }
    }

    return arr;
}
