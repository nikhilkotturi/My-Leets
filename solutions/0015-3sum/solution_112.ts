# 3sum (Solution 112)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

//     }
// }

// 1.  Solution - O(n^2)

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
    
    Set<List<Integer>> resultSet = new HashSet<>();
    int n = nums.length;
