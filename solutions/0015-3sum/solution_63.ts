# 3sum (Solution 63)
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
                    List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);
                    Collections.sort(triplet);
                    resultSet.add(triplet);
                }
            } 
        }
     }

     return new ArrayList<List<Integer>>(resultSet);   
    }
