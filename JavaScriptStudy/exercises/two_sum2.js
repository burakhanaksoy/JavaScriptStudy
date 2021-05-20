/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var solutionMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    let potentialSolution = solutionMap.get(target - nums[i]);
    if (potentialSolution !== undefined) {
      return [i, potentialSolution];
    } else {
      solutionMap.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// This (O(n))is much better than the first implementation (which is O(n^2))
