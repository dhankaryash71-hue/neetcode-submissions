class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        prefix_sum = 0
        freq = {0: 1}

        for num in nums:
            prefix_sum += num

            target = prefix_sum - k
            count += freq.get(target, 0)

            freq[prefix_sum] = freq.get(prefix_sum, 0) + 1

        return count