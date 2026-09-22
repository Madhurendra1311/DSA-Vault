// leetcode link: https://leetcode.com/problems/find-peak-element/description/

// Approach 1

var findPeakElement = function (nums) {
    // A single element is always a peak.
    if (nums.length === 1) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        // Check the first element using only the right neighbor.
        if (i === 0) {
            if (nums[i] > nums[i + 1]) {
                return i;
            }
        } else if (i === nums.length - 1) {
            // Check the last element using only the left neighbor.
            if (nums[i] > nums[i - 1]) {
                return i;
            }
        } else {
            // A middle element is a peak only if it is greater than both sides.
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                return i;
            }
        }
    }

    return -1;
};

// Approach 2
var findPeakElement = function (nums) {
    // Left boundary of the current search range.
    let low = 0;

    // Right boundary of the current search range.
    let high = nums.length - 1;

    // Keep shrinking the search range until one peak position remains.
    while (low < high) {
        // Calculate the middle index safely.
        const mid = low + Math.floor((high - low) / 2);

        // A rising slope means some peak must exist on the right side.
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            // A falling slope means mid or the left side contains a peak.
            high = mid;
        }
    }

    return low;
};