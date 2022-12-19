## Helper Functions or Goto approaches for solving `Array` related problems for all things interview prep

### Finding the RunningSum 
> Formula = N[S] = N[S] + N[S - 1]
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
    for (let i = 1 ; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    
    return nums
}
```