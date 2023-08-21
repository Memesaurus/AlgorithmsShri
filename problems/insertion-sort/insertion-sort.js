// https://sortvisualizer.com/insertionsort/
// https://en.wikipedia.org/wiki/Insertion_sort

export function insertionSort(arr) {
    const swap = (a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    for (let i = 0; i < arr.length; i++) {
        let proxyI = i;
        let j = i + 1;
        while(arr[j] < arr[proxyI]) {
            swap(proxyI--, j--);
        }
    }

    return arr;
}
