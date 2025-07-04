# 3sum (Solution 111)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

        Set<Integer> newSet = new HashSet<>();
        for(int j = i + 1; j < n; j++){
            int k = (-1)*(nums[i] + nums[j]);
            if(newSet.contains(k)){
                List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);
                    Collections.sort(triplet);
                    resultSet.add(triplet);   
            }

        }
