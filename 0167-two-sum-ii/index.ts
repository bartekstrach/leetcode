// Solution for 0167-two-sum-ii problem

function twoSum(numbers: number[], target: number): number[] {
    let leftPtrIdx = 0;
    let rightPtrIdx = numbers.length - 1;
    let sum: number;

    do {
        sum = numbers[leftPtrIdx] + numbers[rightPtrIdx];

        if (sum < target) {
            leftPtrIdx++;
        } else if (sum > target) {
            rightPtrIdx--;
        }
    } while (sum !== target)

    return [leftPtrIdx + 1, rightPtrIdx + 1];
};