/**
 * @param {string} s
 * @returns {boolean}
 */

var isValid = function (s) {
  const stack = []
  const parens = '() {} []'
  let i = 0
  while (i < s.length) {
    stack.push(s[i])
    i++

    // pull out last two elements in stack
    let open = stack[stack.length - 2]
    let closed = stack[stack.length - 1]

    let potParens = open + closed

    if (parens.includes(potParens)) {
      stack.pop()
      stack.pop()
    }
  }

  // if stack is empty
  return stack.length === 0
}

isValid("{}")
isValid("(]")
isValid("([)]")
isValid("{[]}")
