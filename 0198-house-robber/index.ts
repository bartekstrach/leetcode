// Solution for 0198-house-robber problem

function rob(nums: number[]): number {
    // Best amount we can get up to current position
    let maxRob = 0;
    // Best amount we could get up to position i-1
    let prevRob = 0;

    for (let i = 0; i < nums.length; i++) {
        const temp = Math.max(maxRob, prevRob + nums[i]);

        prevRob = maxRob;
        maxRob = temp;
    }

    return maxRob;
};

/*
Step-by-step solution for [1,2,3,1]

-----------
nums[0] - 1
-----------
    maxRob: 0; prevRob: 0;

    temp = max(0, 0 + 1)
    prevRob = 0
    maxRob = 1

-----------
nums[1] - 2
-----------
    maxRob: 1; prevRob: 0;

    temp = max(1, 0 + 2)
    prevRob = 1
    maxRob = 2

-----------
nums[2] - 3
-----------
    maxRob: 2; prevRob: 1;

    temp = max(2, 1 + 3)
    prevRob = 2
    maxRob = 4

-----------
nums[3] - 1
-----------
    maxRob: 4; prevRob: 2;

    temp = max(4, 2 + 1)
    prevRob = 4
    maxRob = 4
*/
