// https://leetcode.com/problems/maximum-subarray/

export function maximumSubarray(arr) {
    let max = Math.max(...arr);
    let currentMax = 0;
    for (let i = 0; i < arr.length; i++) {
        currentMax += arr[i];
        max = Math.max(currentMax, max);

        if (currentMax < 0) {
            currentMax = 0;
        }
    }

    return max;
}
