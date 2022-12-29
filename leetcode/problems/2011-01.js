var finalValueAfterOperations = function (operations) {
  return operations.reduce((value, operator) => {
    if (operator[0] === '+' || operator[operator.length - 1] === '+') {
      return value + 1
    }
    return value - 1
  }, 0)
};