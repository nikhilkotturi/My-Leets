# 3sum (Solution 163)
# Difficulty: Medium
# Language: Typescript
# URL: https://leetcode.com/problems/3sum/
# Date: 7/3/2025

                k--;
            }

            else{
                List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);
                resultSet.add(triplet);
                j++;
                k--;

                while(j < k && nums[j] == nums[j - 1]) j++;
