# 3sum (Solution 41)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

//     }
// }

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
    
    Set<List<Integer>> resultSet = new HashSet<>();
    Map<Integer, Integer> map = new HashMap<>();

    Arrays.stream(nums).
