// leetcode link: https://leetcode.com/problems/subarray-sum-equals-k/description/

// Approach: 1
var subarraySum = function (nums, k) {
    // Size of the array
    let n = nums.length;

    // Initialize count of subarrays
    let count = 0;

    // Traverse all possible start indices
    for (let i = 0; i < n; i++) {
        // Traverse all possible end indices from start
        for (let j = i; j < n; j++) {
            // Initialize sum for current subarray
            let sum = 0;

            // Calculate sum of subarray from i to j
            for (let m = i; m <= j; m++) {
                sum += nums[m];
            }

            // If sum equals k, increment count
            if (sum === k) {
                count++;
            }
        }
    }

    // Return total count of subarrays
    return count;
};

// Approach: 2
var subarraySum = function (nums, k) {
    // Size of the array
    let n = nums.length;

    // Initialize count of subarrays
    let count = 0;

    // Traverse all possible start indices
    for (let i = 0; i < n; i++) {
        // Initialize sum for current subarray
        let sum = 0;

        // Traverse all possible end indices from start
        for (let j = i; j < n; j++) {
            // Add current element to sum
            sum += nums[j];

            // If sum equals k, increment count
            if (sum === k) {
                count++;
            }
        }
    }

    // Return total count of subarrays
    return count;
};