// Solution for 0015-3sum problem

function threeSum(nums: number[]): number[][] {
    const triples: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for i to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let leftPtr = i + 1;
        let rightPtr = nums.length - 1;

        while (leftPtr < rightPtr) {
            const sum = nums[i] + nums[leftPtr] + nums[rightPtr];

            if (sum === 0) {
                triples.push([nums[i], nums[leftPtr], nums[rightPtr]]);

                const leftVal = nums[leftPtr];
                const rightVal = nums[rightPtr];
                
                // Skip duplicates for left pointer
                while (leftPtr < rightPtr && nums[leftPtr] === leftVal) leftPtr++;
                // Skip duplicates for right pointer
                while (leftPtr < rightPtr && nums[rightPtr] === rightVal) rightPtr--;
            } else if (sum < 0) {
                leftPtr++;
            } else {
                rightPtr--;
            }
        }
    }
    
    return triples;
};
