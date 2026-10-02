class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

    let map = new Map();

    for(let i = 0; i < strs.length; i++) {

        let count = new Array(26).fill(0);

        for(let j = 0; j < strs[i].length; j++) {
            let index = strs[i].charCodeAt(j) - 97;
            count[index]++;
        }

        let key = "";

        for(let j = 0; j < 26; j++) {
            key += count[j] + "#";
        }

        if(!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(strs[i]);
    }

    return Array.from(map.values());
}
    }

