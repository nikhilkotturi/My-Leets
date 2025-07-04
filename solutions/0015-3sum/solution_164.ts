# 3sum (Solution 164)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

        int j = i + 1;
        int k = n - 1;

        while(j < k){
          int sum = nums[i] + nums[j] + nums[k];
            if(sum < 0){
                j++;
            }

            else if(sum > 0){
