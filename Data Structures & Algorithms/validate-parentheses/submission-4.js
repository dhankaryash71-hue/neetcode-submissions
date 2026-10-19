class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[];
        for(let i=0;i<s.length;i++){
            let ch=s[i];
          if(ch==='(' || ch==='['|| ch==='{'){
            stack.push(ch)
          }
          else{
            let top = stack.pop();
            if(ch===')'&& top!=='('){
                return false;
            }
            if(ch===']'&& top!=='['){
                return false;
            }
            if(ch==='}'&& top!=='{'){
                return false
          }

        }
    }
    return stack.length===0;
}
}
