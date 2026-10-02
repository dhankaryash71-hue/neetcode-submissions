class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
      
    let low = m - 1;
    let high = n - 1;
    let index = m + n - 1;

    while (high >= 0) {

        if (low >= 0 && nums1[low] > nums2[high]) {
            nums1[index] = nums1[low];
            low--;
        } else {
            nums1[index] = nums2[high];
            high--;
        }

        index--;
    }

    }
}
