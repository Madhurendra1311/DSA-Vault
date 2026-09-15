// striver link: https://takeuforward.org/plus/dsa/problems/subsets-i

class Solution {

    subsetSums(nums) {

        const ans = [];
        const current = [];

        function findSubsets(index, sum) {

            if (index === nums.length) {
                ans.push(sum);
                return;
            }

            // Pick
            findSubsets(index + 1, sum + nums[index]);

            // Do not pick
            findSubsets(index + 1, sum);
        }

        findSubsets(0, 0);

        ans.sort((a, b) => a - b);

        return ans;
    }
}