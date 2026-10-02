class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res="";
        let low = 0;
        let high = 0;
        while(low< word1.length || high<word2.length){
            if(low<word1.length){
                res +=word1[low];
                low++;
            }
            if(high<word2.length){
                res+=word2[high];
                high++;
            }
        }
        
           return res;
    }
}
