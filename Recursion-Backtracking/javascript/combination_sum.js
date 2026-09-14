// leetcode link: https://leetcode.com/problems/combination-sum/description/

class Solution {

    // Function to find all combinations recursively
    findCombination(ind, target, arr, ans, ds) {
        // Base case: if we have considered all elements in the array
        if (ind === arr.length) {
            // If the target is zero, we have found a valid combination
            if (target === 0) {
                ans.push([...ds]);  // Add the current combination to the result
            }
            return;
        }

        // Recursive case: pick the element if it's less than or equal to the target
        if (arr[ind] <= target) {
            ds.push(arr[ind]);  // Add the current element to the combination
            this.findCombination(ind, target - arr[ind], arr, ans, ds);  // Continue with the same index to allow repeated elements
            ds.pop();  // Backtrack by removing the last added element
        }

        // Skip the current element and move to the next index
        this.findCombination(ind + 1, target, arr, ans, ds);
    }

    // Main function to get all combinations
    combinationSum(candidates, target) {
        const ans = [];  // To store the result
        const ds = [];  // To store a current combination
        this.findCombination(0, target, candidates, ans, ds);  // Start the recursive search
        return ans;  // Return all valid combinations
    }
}

// Driver code
const obj = new Solution();
const v = [2, 3, 6, 7];  // Candidate numbers
const target = 7;  // Target sum

// Get all combinations
const ans = obj.combinationSum(v, target);

// Output the combinations
console.log("Combinations are: ");
ans.forEach(combination => {
    console.log(combination.join(" "));  // Print each element of the combination
});