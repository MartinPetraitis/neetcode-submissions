class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        let l = 0;
        let s1L = s1.length;
        let letters1 = new Array(26).fill(0);
        let letters2 = new Array(26).fill(0);

        for(let i = 0; i < s1L; i++) {
            letters1[s1.charCodeAt(i) - 97]++;
            letters2[s2.charCodeAt(i) - 97]++;
        }

        for(let r = s1L; r <= s2.length; r++) {
            if(letters1.every((val, index) => val === letters2[index])) {
                return true;
            }
            if (r < s2.length) {
                letters2[s2.charCodeAt(r) - 97]++;
                letters2[s2.charCodeAt(l) - 97]--;
                l++;

            }
        }

        return false;
    }
}