# range sum query immutable
# Difficulty: Easy
# Language: Typescript
# URL: https://leetcode.com/problems/range-sum-query-immutable/submissions/1681614532/
# Date: 6/30/2025

doing return prefixSum[right] - prefixSum[left -1], will remove all the elements before left i.e. from 0 till left - 1.
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */
