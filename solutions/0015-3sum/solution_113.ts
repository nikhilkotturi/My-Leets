# 3sum (Solution 113)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

//     }
// }

// 2. Somewhat better Solution - O(n^2) - two sum ap

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
    
    Set<List<Integer>> resultSet = new HashSet<>();
    int n = nums.length;
