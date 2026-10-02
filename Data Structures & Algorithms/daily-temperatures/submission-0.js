class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack=[];
        let ans =new Array(temperatures.length).fill(0);
        for(let i=0;i<temperatures.length;i++){
            while(stack.length>0 && 
            temperatures[i]>temperatures[stack[stack.length-1]]){
                let prev =stack.pop();
                 ans[prev]=i-prev;
            }
            stack.push(i);
        }
        return ans;
    }
}
