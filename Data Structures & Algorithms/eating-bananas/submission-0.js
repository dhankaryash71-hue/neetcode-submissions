class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

    let low = 1;
    let high = Math.max(...piles);

    while(low < high) {

        let mid = Math.floor((low + high) / 2);

        let hours = 0;

        for(let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid);
        }

        if(hours <= h) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
    }
}
