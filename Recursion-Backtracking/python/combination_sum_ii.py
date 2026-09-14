# leetcode link: https://leetcode.com/problems/combination-sum-ii/description/

class Solution:

    # Function to find all combinations of numbers that sum up to the target
    def findCombination(self, ind, target, arr, ans, ds):
        # Base case: If the target becomes 0, we found a valid combination
        if target == 0:
            ans.append(list(ds))  # Add the current combination to the result
            return

        # Loop through the elements starting from index 'ind'
        for i in range(ind, len(arr)):
            # Skip duplicates to avoid repeating combinations
            if i > ind and arr[i] == arr[i - 1]:
                continue

            # If the current element is greater than the remaining target, break the loop
            if arr[i] > target:
                break

            # Include the current element in the combination
            ds.append(arr[i])

            # Recur with the updated target and next index (i + 1 to avoid repetition)
            self.findCombination(i + 1, target - arr[i], arr, ans, ds)

            # Backtrack by removing the last added element
            ds.pop()

    # Function to calculate all unique combinations that sum up to the target
    def combinationSum2(self, candidates, target):
        candidates.sort()  # Sort the candidates to handle duplicates
        ans = []  # To store the result
        ds = []  # To store a current combination
        self.findCombination(0, target, candidates, ans, ds)  # Start the recursive search
        return ans  # Return all valid combinations

# Driver code
if __name__ == "__main__":
    obj = Solution()
    v = [10, 1, 2, 7, 6, 1, 5]  # Example input
    target = 8  # Target sum

    # Get all combinations that sum up to 8
    comb = obj.combinationSum2(v, target)

    # Output the combinations
    print("[", end=" ")
    for combination in comb:
        print("[", end=" ")
        print(" ".join(map(str, combination)), end=" ")
        print("]", end=" ")
    print("]")