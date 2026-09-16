// leetcode link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

//sliding window

// Approach 1
var lengthOfLongestSubstring = function (s) {
    //sliding window
    const obj = {};

    // Left pointer of the sliding window
    let left = 0;

    // Store the maximum length found so far
    let maxLen = 0;

    // Right pointer moves through the string
    for (let right = 0; right < s.length; right++) {

        // If current character already exists in the window
        while (obj[s[right]] !== undefined) {

            // Remove the character at the left side
            delete obj[s[left]];

            // Move left pointer forward
            left++;
        }

        // Add current character to the object
        obj[s[right]] = true;

        // Calculate current window length
        let currentLen = right - left + 1;

        // Update maximum length
        maxLen = Math.max(maxLen, currentLen);
    }
    // Return the longest substring length
    return maxLen;
};

// Approach 2
var lengthOfLongestSubstring = function (s) {
    //sliding window
    const set = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
