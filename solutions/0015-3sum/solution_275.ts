# 3sum (Solution 275)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/description/
# Date: 7/4/2025

// }

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
    
    // Set<List<Integer>> resultSet = new HashSet<>();

    List<List<Integer>> result = new ArrayList<>();

    Arrays.sort(nums);
