/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.ptr = 0
  this.stream = new Array(n).fill(0)
};

/** 
* @param {number} idKey 
* @param {string} value
* @return {string[]}
*/
OrderedStream.prototype.insert = function (idKey, value) {
  // 1. If the idKey is equal to the current ptr
  //      a. insert the new element
  //      b. as long as there are elements to the right of me, I will add them
  //          // to my result
  // 2. If the idKey is not equal to the current ptr
  //      a. add the value at this index
  //      b. return result
  let res = []
  this.stream[idKey - 1] = value

  while (this.stream[this.ptr]) {
    res.push(this.stream[this.ptr])
    this.ptr++
  }

  return res
};

/** 
* Your OrderedStream object will be instantiated and called as such:
* var obj = new OrderedStream(n)
* var param_1 = obj.insert(idKey,value)
*/