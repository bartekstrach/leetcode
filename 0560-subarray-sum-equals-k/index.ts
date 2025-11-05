// Solution for 0560-subarray-sum-equals-k problem

function subarraySum(nums: number[], k: number): number {
    let runningSum = 0;
    let matches = 0;

    const prefixSumMap = new Map<number, number>();
    prefixSumMap.set(0, 1);

    for (const num of nums) {
        runningSum += num;

        const targetPrefixSum = runningSum - k;
        matches += prefixSumMap.get(targetPrefixSum) ?? 0;

        prefixSumMap.set(runningSum, (prefixSumMap.get(runningSum) ?? 0) + 1);
    }

    return matches;
};
