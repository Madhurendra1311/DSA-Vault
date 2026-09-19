// leetcode link: https://leetcode.com/problems/valid-palindrome/description/

//Approach 1
var isPalindrome = function (s) {
    //Two pointer approach
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Initialize pointers at both ends
    let left = 0;
    let right = cleanStr.length - 1;

    // Move pointers inward and compare characters
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false; // Mismatch found
        }
        left++;
        right--;
    }

    return true; // Valid palindrome
};

//Approach 2
var isPalindrome = function (s) {

    // Convert the string to lowercase
    s = s.toLowerCase();

    // Remove all characters except letters and numbers
    s = s.replace(/[^a-z0-9]/g, '');

    // Recursive function
    function palindrome(i) {

        // Base condition:
        // We reached the middle of the string
        if (i >= s.length / 2) {
            return true;
        }

        // Compare character from the beginning
        // with the corresponding character from the end
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }

        // Move one position toward the middle
        return palindrome(i + 1);
    }

    // Start checking from index 0
    return palindrome(0);
};

//Approach 3
var isPalindrome = function (s) {
    let str = ""
    let strReverse = ""
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
            str += s[i]
        }
    }
    str = str.toLowerCase()
    for (let j = str.length - 1; j >= 0; j--) {
        strReverse += str[j]
    }
    if (str === strReverse) {
        return true
    } else {
        return false
    }
};

