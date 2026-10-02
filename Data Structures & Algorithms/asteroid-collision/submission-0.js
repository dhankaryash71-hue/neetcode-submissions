class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack=[];
        for(let i=0;i<asteroids.length;i++){
           let asteroid=asteroids[i];
           while(stack.length>0 && asteroid<0 && stack[stack.length-1]>0){
              let top = stack[stack.length-1];
              if(top<Math.abs(asteroid)){
                stack.pop();
              }
              else if(top===Math.abs(asteroid)){
                stack.pop();
                asteroid=0;
              }
              else {
                asteroid=0;
              }
           }
           if(asteroid!==0){
            stack.push(asteroid);
           }
        }
        return stack;
    }
}
