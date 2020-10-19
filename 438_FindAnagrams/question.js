/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

var findAnagrams = function(s, p) {
    let res = [], l = 0, r = 0;
    let m = new Map();
    for (let letter of p) m.set(letter, m.get(letter)+1 || 1);
    let counter = m.size;

    // console.log('Map === ', m)
    // console.log('Counter === ', counter)
    // return
    
    while (r < s.length) {
        let letter = s[r];
        if (m.has(letter)) m.set(letter, m.get(letter)-1);
        if (m.get(letter) == 0) counter--;
        
        while (counter == 0) {
            if (r-l+1 == p.length) res.push(l);
            if (m.has(s[l])) m.set(s[l], m.get(s[l])+1);
            if (m.get(s[l]) > 0) counter++;
            l++;
        }
        console.log('MAP === ', m)
        r++;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // Think of counter as number of letters to collect
};


console.log(findAnagrams('cbaebabacd', 'abc'))