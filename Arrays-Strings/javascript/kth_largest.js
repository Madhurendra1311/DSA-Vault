// leetcode link: https://leetcode.com/problems/kth-largest-element-in-an-array/description/
// Heap problem

// Approach 1
var findKthLargest = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums[nums.length - k];
};

//Approach 2
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a);
    for (let i = 0; i < k - 1; i++) {
        nums.shift();
    }
    return nums[0];
};

