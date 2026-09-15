class Solution:

    def subsetSums(self, nums):

        ans = []
        current = []

        def findSubsets(index, sum):

            if index == len(nums):
                ans.append(sum)
                return

            # Pick
            findSubsets(index + 1, sum + nums[index])

            # Do not pick
            findSubsets(index + 1, sum)

        findSubsets(0, 0)

        ans.sort()

        return ans