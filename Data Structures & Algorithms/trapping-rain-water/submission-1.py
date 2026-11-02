class Solution:
    def trap(self, height: List[int]) -> int:
        left=0
        right=len(height)-1
        lmax=0
        rmax=0
        trapping_water=0

        while left<right:
            if height[left]<=height[right]:
                if height[left]>lmax:
                    lmax=height[left]
                else:
                    trapping_water+=lmax-height[left]
                    left +=1
            else:
                if height[right]>rmax:
                    rmax=height[right]
                else:
                    trapping_water+=rmax-height[right]
                    right -=1
        return trapping_water                  
                       


             
        