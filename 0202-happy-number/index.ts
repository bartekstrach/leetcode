// Solution for 0202-happy-number problem

function getSum(num: number): number {
    let sum = 0;

    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }

    return sum;
}

// Using Set to track visited numbers
// @ts-ignore
function isHappy(n: number): boolean {
    const processedNumbers = new Set<number>();

    let currentNumber = n;
    
    while (currentNumber !== 1 && !processedNumbers.has(currentNumber)) {
        processedNumbers.add(currentNumber);
        currentNumber = getSum(currentNumber);
    }

    return currentNumber === 1;
};

// Using Slow/Fast pointer to detect cycles
// @ts-ignore
function isHappy(n: number): boolean {
    let slow = n;
    let fast = n;

    do {
        slow = getSum(slow);
        fast = getSum(getSum(fast));
    } while (slow !== fast);

    return slow === 1;
}
