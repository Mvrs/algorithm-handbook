## Helper Functions or Goto approaches for solving `String` related problems for all things interview prep


### Removing letters from a string using `RegExp`
> example from Leetcode [1119](https://leetcode.com/problems/remove-vowels-from-a-string/)
```js
/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    const removeVowels = new RegExp(/[aeiou]/ig)
    return s.replaceAll(removeVowels, '')
};
```