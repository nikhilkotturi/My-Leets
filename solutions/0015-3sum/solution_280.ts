# 3sum (Solution 280)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/4/2025

// }

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {

    List<List<Integer>> result = new ArrayList<>();

    Arrays.sort(nums);

    int n = nums.length;
