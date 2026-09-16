// leetcode link: https://leetcode.com/problems/valid-parentheses/description/

// Approach 1
var isValid = function (s) {
    let stack = []
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(')')
        } else if (arr[i] === '{') {
            stack.push('}')
        } else if (arr[i] === '[') {
            stack.push(']')
        } else {
            if (arr[i] !== stack.pop()) {
                return false
            }
        }
    }
    return stack.length === 0;
};

// Approach 2
var isValid = function (s) {
    let stack = [];

    for (let ch of s) {

        // Push opening brackets
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        else {
            // No opening bracket available
            if (stack.length === 0) {
                return false;
            }

            // Get the last opening bracket
            let top = stack.pop();

            // Check matching pair
            if (
                (ch === ')' && top === '(') ||
                (ch === ']' && top === '[') ||
                (ch === '}' && top === '{')
            ) {
                continue;
            }
            else {
                return false;
            }
        }
    }

    // Valid only if no opening brackets remain
    return stack.length === 0;
};

//Approach 3
var isValid = function (s) {
    if (s.length <= 1) {
        return false
    }
    let stack = []
    let hash = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            stack.push(hash[s[i]])
        }
        else if (s[i] !== stack.pop()) {
            return false
        }
    }
    return !stack.length
};