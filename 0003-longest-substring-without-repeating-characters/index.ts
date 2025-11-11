// Solution for 0003-longest-substring-without-repeating-characters problem

function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length;

    let leftPtr = 0;
    let maxLen = 0;

    let charIndexMap = new Map<string, number>();

    for (let rightPtr = 0; rightPtr < s.length; rightPtr++) {
        const char = s[rightPtr];

        if (charIndexMap.has(char) && charIndexMap.get(char)! >= leftPtr) {
            leftPtr = charIndexMap.get(char)! + 1;
        }

        charIndexMap.set(char, rightPtr);
        maxLen = Math.max(maxLen, rightPtr - leftPtr + 1);
    }

    return maxLen;
};
