// Solution for 0643-maximum-average-subarray-i problem

// 1st approach - with shift/push
// @ts-ignore
function findMaxAverage(nums: number[], k: number): number {
    let maxAverage: number = -Infinity;

    const currentNums: number[] = [];

    const sum = (arr: number[]): number => arr.reduce((sum, val) => sum + val, 0);

    for (let i = 0; i < nums.length; i++) {
        if (currentNums.length === k) {
            currentNums.shift();
        }

        currentNums.push(nums[i]);

        const currentAverage = sum(currentNums) / k;

        if (currentAverage > maxAverage) {
            maxAverage = currentAverage;
        }
    }

    return maxAverage;
};

// 2nd approach - with circular buffer
// @ts-ignore
function findMaxAverage(nums: number[], k: number): number {
    let maxAverage: number = -Infinity;

    const currentNums: number[] = [];

    const sum = (arr: number[]): number => arr.reduce((sum, val) => sum + val, 0);

    for (let i = 0; i < nums.length; i++) {
        currentNums[i % k] = nums[i];

        const currentAverage = sum(currentNums) / k;

        if (currentAverage > maxAverage) {
            maxAverage = currentAverage;
        }
    }

    return maxAverage;
};

// 3rd approach - with sliding window
// @ts-ignore
function findMaxAverage(nums: number[], k: number): number {
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    let maxSum = currentSum;

    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
};
