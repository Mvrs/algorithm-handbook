/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let matches = 0

  for (const item of items) {
    const [type, color, name] = item

    switch (ruleKey) {
      case 'type':
        if (type === ruleValue) {
          matches++
        }
        break
      case 'color':
        if (color === ruleValue) {
          matches++
        }
        break
      case 'name':
        if (name === ruleValue) {
          matches++
        }
        break
    }
  }

  return matches
};