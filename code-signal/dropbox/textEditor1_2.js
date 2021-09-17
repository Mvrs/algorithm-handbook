function textEditor1_2(queries) {
  let txt = ""
  let redu = []
  let hist = []
  let cur = 0
  let sel = [-1, -1]
  let selected
  let restore
  let clip = ""
  let result = []

  function APPEND(t) {
    hist.push([txt, sel])
    re = []
    if (sel[0] === -1) {
      let front = txt.slice(0, cur)
      let back = txt.slice(cur)

      front += t;
      front += back;

      txt = front
      result.push(txt)
      cur += t.length;
    } else {
      selected = txt.substring(sel[0], sel[1])
      txt = txt.replace(selected, t)
      result.push(txt)
    }
  }

  function MOVE(pos) {
    if (pos < 0) {
      cur = 0;
    }
    if (pos >= txt.length) {
      cur = txt.length
    }
    cur = pos
  }

  function BACKSPACE() {
    hist.push([txt, sel])
    redu = []
    if (sel[0] === -1) {
      txt = txt.slice(0, txt.length - 1)
    }
    result.push(txt)
  }
  function SELECT(l, r) {
    let left = l
    let right = r

    if (left < 0) {
      left = 0
    }

    if (right > txt.length) {
      right = txt.length;
    }

    if (left - right === 0) {
      cur = left
      sel = [-1, -1]
    } else {
      sel = [left, right]
    }
  }

  function COPY() {
    clip = txt.substring(sel[0], sel[1]).trim()
  }

  function PASTE() {
    hist.push([txt, sel])
    redu = []
    let front = txt.slice(0, cur)
    let back = txt.slice(cur)

    front += clip
    front += back

    txt = front
    cur += clip.length
    result.push(txt)
  }

  function UNDO() {
    redu.push([txt, sel])
    restore = hist.pop()
    txt = restore[0]
    sel = restore[1]
    result.push(txt)
  }

  function REDO() {
    hist.push([txt, sel])
    restore = redu.pop()
    txt = restore[0]
    sel = restore[1]
    result.push(txt)
  }

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i]

    switch (query[0]) {
      case 'APPEND':
        (APPEND(query[1]))
        break;
      case 'MOVE':
        (MOVE(query[1]))
        break;
      case 'BACKSPACE':
        (BACKSPACE())
        break;
      case 'SELECT':
        (SELECT(query[1], query[2]))
        break;
      case 'COPY':
        (COPY())
        break;
      case 'PASTE':
        (PASTE())
        break;
      case 'UNDO':
        (UNDO())
        break;
      case 'REDO':
        (REDO())
        break;
      default:
        break
    }
  }

  return result
}

// APPEND
textEditor1_2([
  ["APPEND", "Hey"],
  ['APPEND', " there"],
  ['APPEND', "!"],
])

// MOVE
textEditor1_2([
  ["APPEND", "Hey you"],
  ['MOVE', "3"],
  ['APPEND', ","],
])

// BACKSPACE
textEditor1_2([
  ["APPEND", "Hey you"],
  ['BACKSPACE'],
  ['BACKSPACE'],
])

textEditor1_2([
  ["APPEND", "!"],
  ['BACKSPACE'],
  ['BACKSPACE'],
])

// SELECT
textEditor1_2([
  ["APPEND", "Hello cruel world!"],
  ["SELECT", "5", "11"],
  ["APPEND", ","],
])
textEditor1_2([
  ["APPEND", "Hello"],
  ["SELECT", "2", "5"],
  ["APPEND", "y there"],
])

// COPY AND PASTE
textEditor1_2([
  ["APPEND", "Hello, world!"],
  ["SELECT", "5", "12"],
  ["COPY"],
  ["MOVE", "12"],
  ["PASTE"],
  ["PASTE"]
])

// UNDO
textEditor1_2([
  ["APPEND", "Hello, world!"],
  ["SELECT", "7", "12"],
  ["BACKSPACE"],
  ["UNDO"],
  ["APPEND", "you"]
])

// REDO
textEditor1_2([
  ["APPEND", "Hello, world!"],
  ["SELECT", "7", "12"],
  ["BACKSPACE"],
  ["MOVE", "6"],
  ["UNDO"],
  ["UNDO"],
  ["REDO"],
  ["REDO"],
])






//PART 1
// APPEND("Hello! World!");
// console.log(txt);
// MOVE(5);
// DELETE();
// console.log(txt);
// APPEND(",")
// console.log(txt);

// PART 2
// APPEND("Hello cruel world!");
// console.log(txt);
// SELECT(5, 11);
// APPEND(",");
// console.log(txt);

// APPEND("Hello, world!");
// console.log(txt);
// SELECT(5,12);
// COPY();
// MOVE(12);
// PASTE();
// console.log(txt);
// PASTE();
// console.log(txt);

// PART 3
// APPEND("Hello, world!");
// console.log(txt);
// SELECT(7,12);
// DELETE();
// console.log(txt);
// UNDO();
// console.log(txt);
// APPEND('you');
// console.log(txt);

// APPEND("Hello, world!");
// console.log(txt);
// SELECT(7, 12);
// DELETE();
// console.log(txt);
// MOVE(6);
// UNDO();
// console.log(txt);
// UNDO();
// console.log(txt);
// REDO();
// console.log(txt);
// REDO();
// console.log(txt);
