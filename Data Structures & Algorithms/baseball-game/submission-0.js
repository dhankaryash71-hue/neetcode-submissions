class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
         let stack=[];
      for(let i=0;i<operations.length;i++){
        let op=operations[i];
        if(op==='C'){
            stack.pop();
        }
        else if(op==='D'){
            stack.push(stack[stack.length-1]*2);
        }
        else if(op==='+'){
            let n=stack.length;
            stack.push(stack[n-1]+stack[n-2]);
        } 
        else {
          stack.push(Number(op));
        }
      }
      let sum=0;
      for(let i=0;i<stack.length;i++){
        sum+=stack[i];
      }
      return sum;
    }
}
