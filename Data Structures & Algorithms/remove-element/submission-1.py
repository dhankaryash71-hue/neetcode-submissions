class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        temp=0;
        for num in range(len(nums)):
            if nums[num]!=val:
                nums[temp]=nums[num]
                temp +=1

        return temp      
        