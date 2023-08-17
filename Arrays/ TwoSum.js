// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  let hashmap = {};
  for (i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashmap[diff] != undefined) {
      return [i, hashmap[diff]];
    } else {
      hashmap[nums[i]] = i;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
