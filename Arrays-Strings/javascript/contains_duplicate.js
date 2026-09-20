// leetcode link: https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};