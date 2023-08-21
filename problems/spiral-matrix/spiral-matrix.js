// https://leetcode.com/problems/spiral-matrix-ii/description/

// Вывод чисел от 1 до n^2 по спирали

export function spiralMatrix(n) {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    const arr = Array(n + 2).fill().map(() => Array(n + 2).fill());

    arr[0].fill(-1);
    arr.at(-1).fill(-1);

    for (let i = 1; i < n + 1; i++) {
        arr[i][0] = -1;
        arr[i][n + 1] = -1;
    }
    arr[1][1] = 1;

    let i = 0;
    let counter = 2;
    let coords = [1, 1]

    while (counter <= n ** 2) {
        let [ny, nx] = [coords[0] + directions[i][0], coords[1] + directions[i][1]];

        if (arr[ny][nx]) {
            i >= (directions.length - 1) ? i = 0 : i++;
        } else {
            arr[ny][nx] = counter++;
            coords = [ny, nx];
        }
    }

    return arr.slice(1, n + 1).map((arr) => arr.slice(1, n + 1));
}