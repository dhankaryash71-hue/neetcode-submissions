class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(!s){
            return 0;
        }
        let end=0;
        let start=0;
        let maxlength=0;

        const char=new Set();
        while(end<s.length){
            if(!char.has(s[end])){
                char.add(s[end]);
                end++;
                maxlength=Math.max(maxlength,char.size)
            }
            else{
                char.delete(s[start]);
                start++;
            }
        }
        return maxlength;
    }
}
