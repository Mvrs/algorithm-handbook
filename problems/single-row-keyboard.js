/**
 * There is a special keyboard with all keys in a single row.
  Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). 
  Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. 
  The time taken to move your finger from index i to index j is |i - j|.
  You want to type a string word. Write a function to calculate how much time it takes to type it with one finger
 */

// The idea:
// 1. generate a map of {character: index} so that you can get a position of a character on the keyboard in O(1) time.
// 2. loop through each character of word and calculate the finger travelling time with the help of the map object

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

const calculateTime = (keyboard, word) => {
  let curPos = 0;
  let time = 0;
  const map = new Map();

  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i);
  }

  console.log(map);

  for (const w of word) {
    const letter = map.get(w);
    time += Math.abs(curPos - letter);
    curPos = letter;
  }

  return time;
};

// Test Case: 1
/**
 * Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
  Output: 4
  Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
  Total time = 2 + 1 + 1 = 4. 
*/

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"));

// Test Case: 2

console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode"));

// using reducer
// take four args
// (accumulator, current_value, current_index, array)

var calculateTimeReduce = function (keyboard, word) {
  const map = new Map();

  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i);
  }

  const count = word.split("").reduce(
    ([sum, lastPos], char) => {
      const thisPos = map.get(char);
      sum += Math.abs(lastPos - thisPos);
      return [sum, thisPos];
    },
    [0, 0],
  );

  return count[0];
};

// console.log(calculateTimeReduce("pqrstuvwxyzabcdefghijklmno", "leetcode"));
