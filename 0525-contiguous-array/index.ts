// Solution for 0525-contiguous-array problem

/**
 * Finds the maximum length of a contiguous subarray with equal numbers of 0s and 1s.
 * 
 * The algorithm works by:
 * 1. Converting 0s to -1 and 1s to +1
 * 2. Calculating running sum at each index
 * 3. When same sum appears twice, the subarray between those indices has equal 0s and 1s
 * 
 * Example 1: [0,1,1,1,1,1,0,0,0]
 * Running sum: [-1,0,1,2,3,4,3,2,1]
 * Result: 6 (subarray [1,1,1,0,0,0] from index 3 to 8)
 * 
 * Example 2: [0,1,1,1,0,1,0,1,1,1,0,0,0]
 * Running sum: [-1,0,1,2,1,2,1,2,3,4,3,2,1]
 * Result: 10 (subarray [1,1,1,0,1,0,1,1,1,0,0] from index 2 to 12)
 * 
 * @param nums - Binary array containing only 0s and 1s
 * @returns Length of the longest contiguous subarray with equal 0s and 1s (not necessarily symmetric!)
 */
function findMaxLength(nums: number[]): number {
    const sumToFirstIndex = new Map<number, number>();
    
    // Initialize with sum 0 at index -1 to handle cases where the subarray starts from index 0
    sumToFirstIndex.set(0, -1);

    let prefixSum = 0;
    let maxSubarrayLength = 0;

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if (nums[currentIndex] === 0)
            prefixSum -= 1;
        else
            prefixSum += 1;

        if (sumToFirstIndex.has(prefixSum)) {
            const firstIndexWithSameSum = sumToFirstIndex.get(prefixSum)!;
            maxSubarrayLength = Math.max(maxSubarrayLength, currentIndex - firstIndexWithSameSum);
        } else {
            sumToFirstIndex.set(prefixSum, currentIndex);
        }
    }

    return maxSubarrayLength;
};
