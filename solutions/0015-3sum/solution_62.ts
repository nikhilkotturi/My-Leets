# 3sum (Solution 62)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

    
    for(int i = 0; i < n; i++){
        map.put(nums[i], i);
    }

    
     for(int i = 0; i < n; i ++){
        for(int j = i + 1; j < n; j++){
            for(int k = j + 1; k < n; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
