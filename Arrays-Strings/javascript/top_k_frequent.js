// leetcode link: https://leetcode.com/problems/top-k-frequent-elements/description/

var topKFrequent = function (nums, k) {
    const countMap = {};

    // Count the frequency of each number
    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    // Create buckets where index = frequency
    // The max frequency possible is nums.length
    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    for (const [num, freq] of Object.entries(countMap)) {
        buckets[freq].push(Number(num));
    }

    // Gather the top k elements by iterating backwards
    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
        if (result.length >= k) {
            return result.slice(0, k);
        }
    }

    return result;
};