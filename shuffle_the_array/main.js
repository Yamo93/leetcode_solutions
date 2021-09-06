/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    const shuffled = [];
    let i = 0;
    while (i < n) {
        shuffled.push(nums[i]);
        shuffled.push(nums[i+n]);
        i++;
    }
    
    return shuffled;
};