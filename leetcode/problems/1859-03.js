// more optimal solution
// Time: O(n) + O(1)
// Space: O(n)

var sortSentence = function (s) {
  const words = s.split(' ')
  const bucket = {}

  words.reduce((acc, word) => {
    let num = word[word.length - 1]
    if (!bucket[num]) {
      bucket[num] = []
    }
    bucket[num].push(word.slice().split(num).join(''))
  }, {})

  return Object.values(bucket).map(w => w).join(' ')
};