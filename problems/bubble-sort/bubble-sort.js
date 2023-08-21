// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort

export function bubbleSort(arr) {
    const swap = (a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                swap(i, j);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([3, 2, 1]));
