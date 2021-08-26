/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const lookup = {};
    let j;
    for (let i = 0; i < nums.length; i++) {
        j = target - nums[i];
        if (lookup.hasOwnProperty(j)) {
            return [lookup[j], i];
        }
        lookup[nums[i]] = i;
    }
    return output;
};