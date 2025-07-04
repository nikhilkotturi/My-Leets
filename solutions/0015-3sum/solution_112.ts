# 3sum (Solution 112)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/submissions/1685665231/
# Date: 7/3/2025

        Set<Integer> newSet = new HashSet<>();
        for(int j = i + 1; j < n; j++){
            int k = (-1)*nums[i] + (-1)*nums[j];
            if(newSet.contains(k)){
                List<Integer> triplet = Arrays.asList(nums[i], nums[j], k);
                Collections.sort(triplet);
                resultSet.add(triplet);   
            }
            else{
                newSet.add(nums[j]);
