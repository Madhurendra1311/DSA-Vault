// leetcode link: https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};

// Approach 2:

var containsDuplicate = function (nums) {
    hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true
        } else {
            hash[nums[i]] = 1
        }
    }
    return false
};

// Approach 3

var containsDuplicate = function (nums) {
    hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]] += 1
        } else {
            hash[nums[i]] = 1
        }
    }
    values = Object.values(hash)
    for (let j = 0; j < values.length; j++) {
        if (values[j] > 1) {
            return true
        }
    }
    return false
};

// Approach 4:
var containsDuplicate = function (nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return true; // Duplicate found early, exit immediately
        }
        seen.add(num);
    }

    return false; // All elements are unique
};
