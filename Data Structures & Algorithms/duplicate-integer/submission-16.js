class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numbers = [];
        let i = 0;
        while(i < nums.length) {
            if(numbers.includes(nums[i])) {
                return true;
            }
            numbers.push(nums[i]);
            i++;
        }
        return false;
    }
}
