// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(arr, value) {
    let [l, r] = [0, arr.length - 1];

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] > value) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
}
