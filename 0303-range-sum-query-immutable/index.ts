// Solution for 0303-range-sum-query-immutable problem

/**
 * First solution: On-demand calculation approach
 * Time Complexity: 
 * - Constructor: O(1)
 * - sumRange: O(n) where n is the size of range (right - left + 1)
 * Space Complexity: O(1) - no extra space needed besides input array
 * 
 * Best for:
 * - Limited number of queries
 * - Memory constrained environments
 * - When quick initialization is priority
 */
// @ts-ignore
class NumArray {
    numbers: number[];

    constructor(nums: number[]) {
        this.numbers = nums;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;

        for (let i = left; i <= right; i++) {
            sum += this.numbers[i];
        }

        return sum;
    }
}

/**
 * Second solution: Prefix Sum approach
 * Time Complexity:
 * - Constructor: O(n) where n is array length
 * - sumRange: O(1) constant time
 * Space Complexity: O(n) for storing prefix sums
 * 
 * Best for:
 * - Frequent range sum queries
 * - When query performance is critical
 * - When additional memory usage is acceptable
 */
// @ts-ignore
class NumArray {
    numbers: number[];
    prefixSumNumbers: number[];

    constructor(nums: number[]) {
        this.numbers = nums;

        this.prefixSumNumbers = [];

        let sum = 0;
        for (const num of nums) {
            sum += num;
            this.prefixSumNumbers.push(sum);
        }
    }

    sumRange(left: number, right: number): number {
        if (left === 0)
            return this.prefixSumNumbers[right];

        return this.prefixSumNumbers[right] - this.prefixSumNumbers[left - 1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */