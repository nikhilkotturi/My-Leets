# 3sum (Solution 147)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

// }

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
    
    Set<List<Integer>> resultSet = new HashSet<>();
    int n = nums.length;

     for(int i = 0; i < n; i ++){
        if(i > 0 && nums[i] == nums[i])
