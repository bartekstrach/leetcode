// Solution for 0011-container-with-most-water problem

function maxArea(height: number[]): number {
    let max = 0;
    let leftPtr = 0;
    let rightPtr = height.length - 1;

    while (leftPtr < rightPtr) {
        const width = rightPtr - leftPtr;
        const minHeight = Math.min(height[leftPtr], height[rightPtr]);

        const area = width * minHeight;

        if (area > max) {
            max = area;
        }

        if (height[leftPtr] < height[rightPtr]) {
            leftPtr++;
        } else {
            rightPtr--;
        }
    }

    return max;
};
