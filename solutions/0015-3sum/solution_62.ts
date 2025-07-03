# 3sum (Solution 62)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/description/
# Date: 7/3/2025

//     }
// }

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
    
    Set<List<Integer>> resultSet = new HashSet<>();
    Map<Integer, Integer> map = new HashMap<>();

    int n = nums.length;
