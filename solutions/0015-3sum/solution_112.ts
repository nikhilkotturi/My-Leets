# 3sum (Solution 112)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

// 1. Brute Force Solution - O(n^3) - giving me TLE 

// class Solution {
//     public List<List<Integer>> threeSum(int[] nums) {
    
//     Set<List<Integer>> resultSet = new HashSet<>();
//     int n = nums.length;
//      for(int i = 0; i < n; i ++){
//         for(int j = i + 1; j < n; j++){
//             for(int k = j + 1; k < n; k++){
