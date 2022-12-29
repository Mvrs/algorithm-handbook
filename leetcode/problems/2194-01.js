/**
 * @param {string} s
 * @return {string[]}
 */


var cellsInRange = function (s) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const start = parseInt(s[1], 10)
  const end = parseInt(s[s.length - 1], 10)

  function generatedColumn(column) {
    const columnData = []
    let startIndex = start
    let endIndex = end

    for (; startIndex <= end; startIndex++) {
      columnData.push(`${column}${startIndex}`)
    }
    return columnData
  }

  let columns = [];

  let indexOne = s[0].charCodeAt(0) - 65
  let indexTwo = s[3].charCodeAt(0) - 65

  for (; indexOne <= indexTwo; indexOne++) {
    const generateColumn = generatedColumn(alphabet[indexOne])
    columns = [...columns, ...generateColumn]
  }

  return columns
};











