// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort

export function bubbleSort(arr) {
    const swap = (a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        while(arr[j] < arr[i]) {
            swap(i--, j--);
        }
    }

    return arr;
}
