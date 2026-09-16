// leetcode link: https://leetcode.com/problems/two-sum/submissions/2144024966/

// Approach 1
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// Approach 2
var twoSum = function (nums, target) {
    let index = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                index.push(i)
                index.push(j)
            }
        }
    }
    return index;
};

// Approach 3
var twoSum = function (nums, target) {
    let numObj = {};

    // Traverse through the array
    for (let i = 0; i < nums.length; i++) {

        // Find the number we need to complete the target
        let complement = target - nums[i];

        // Check if complement already exists in the object
        if (numObj[complement] !== undefined) {

            // Return index of complement and current index
            return [numObj[complement], i];
        }

        // Store current number and its index
        numObj[nums[i]] = i;
    }
};

