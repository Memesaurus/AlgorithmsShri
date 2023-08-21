// https://ru.wikipedia.org/wiki/Решето_Эратосфена

export function primeNumbers(num) {
    const result = [];
    const nonPrimes = new Set();

    for (let i = 2; i <= num; i++) {
        let counter = i;
        while (i * 2 <= num && counter <= num) {
            counter += i;
            nonPrimes.add(counter);
        }

        if (nonPrimes.has(i)) {
            continue;
        }
        result.push(i);
    }

    return result;
}
