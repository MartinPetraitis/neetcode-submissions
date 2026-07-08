class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        let product = 1;
        let zeroCount = 0;

        for(let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) product = product * nums[i];
            else zeroCount++;
        }

        for(let j = 0; j < nums.length; j++) {
            if (zeroCount > 1) res.push(0);
            else if (zeroCount === 1) res.push(nums[j] === 0 ? product : 0);
            else res.push(product / nums[j]);
        }
        
        return res;
    }
}
