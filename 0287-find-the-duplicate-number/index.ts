// Solution for 0287-find-the-duplicate-number problem

function findDuplicate(nums: number[]): number {
    let slowPtr = nums[0];
    let fastPtr = nums[0];

    // Find the intersection point in cycle
    do {
        slowPtr = nums[slowPtr];
        fastPtr = nums[nums[fastPtr]];
    } while (slowPtr !== fastPtr);

    // Find the entrance to the cycle (which is the duplicated value)
    slowPtr = 0;
    while (slowPtr !== fastPtr) {
        slowPtr = nums[slowPtr];
        fastPtr = nums[fastPtr];
    }

    return slowPtr;
};
