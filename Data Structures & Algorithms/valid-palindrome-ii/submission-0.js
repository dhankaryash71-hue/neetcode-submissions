class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
    let low = 0;
    let high = s.length - 1;

    while (low < high) {

        if (s[low] !== s[high]) {

            let left = low + 1;
            let right = high;

            while (left < right && s[left] === s[right]) {
                left++;
                right--;
            }

            if (left >= right) {
                return true;
            }

            left = low;
            right = high - 1;

            while (left < right && s[left] === s[right]) {
                left++;
                right--;
            }

            if (left >= right) {
                return true;
            }

            return false;
        }

        low++;
        high--;
    }

    return true;
}
    } ;

