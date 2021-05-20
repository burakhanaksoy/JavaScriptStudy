/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [3, 2, 4];
target = 6;
var twoSum = function (nums, target) {
  var check;
  var answer = [];
  for (var i = 0; i < nums.length - 1; i++) {
    check = target - nums[i];
    answer.push(i);
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] === check) {
        answer.push(j);
        return answer;
      }
    }
    answer = [];
  }
};

console.log(twoSum(nums, target));

// Not a very good solution, it works in O(n^2)...

