# 3sum (Solution 281)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/4/2025


     for(int i = 0; i < n; i ++){
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        int j = i + 1;
        int k = n - 1;

        while(j < k){
          int sum = nums[i] + nums[j] + nums[k];
            if(sum < 0){
                j++;
