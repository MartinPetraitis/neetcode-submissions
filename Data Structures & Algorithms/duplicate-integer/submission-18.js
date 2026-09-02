class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numbers = new Set;
        for(const num of nums) {
            if(numbers.has(num)) {
                return true;
            }
            numbers.add(num);
        }
        return false;
    }
}
