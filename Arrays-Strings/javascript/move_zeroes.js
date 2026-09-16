// leetcode link: https://leetcode.com/problems/move-zeroes/description/

// Approach 1
var moveZeroes = function (nums) {
    let temp = [];

    // Store all non-zero elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            temp.push(nums[i]);
        }
    }

    // Fill remaining positions with zero
    while (temp.length < nums.length) {
        temp.push(0);
    }

    // Copy temp back to original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }

    return nums;
};

//Approach 2:
// Two pointers
var moveZeroes = function (nums) {
    //Two pointer approach
    // Pointer to the first zero
    let j = -1;

    // Find the first zero
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            j = i;
            break;
        }
    }

    // No zero found
    if (j === -1) return nums;

    // Start from the element after the first zero
    for (let i = j + 1; i < nums.length; i++) {

        if (nums[i] !== 0) {

            // Swap
            [nums[i], nums[j]] = [nums[j], nums[i]];

            // Move j to the next zero
            j++;
        }
    }

    return nums;
};