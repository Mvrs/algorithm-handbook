/**
 * @param {string} s
 * @return {string}
 */

/**
 three pointer approach
 
 let i => keep track of the current vowel
 let j => keep track of the next vowel
 let k => the variable we choose to complete the swap
 
 Case: "leetcode"
 
 i => 'l'
 j => 'e'
 k => ''
 
 

*/

var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  let i = 0

  let j = s.length - 1


  let chars = s.split('')

  let tmp = null

  while (i < j) {


    if (vowels.indexOf(chars[i]) !== -1 && vowels.indexOf(chars[j]) !== -1) {
      [chars[i], chars[j]] = [chars[j], chars[i]]
      i++
      j--


      // if leftside only has vowel    
    }
    if (vowels.indexOf(chars[i]) === -1) {
      i++
      // if rightside only has vowel
    }
    if (vowels.indexOf(chars[j]) === -1) {
      j--
    }

  }


  return chars.join('')


};