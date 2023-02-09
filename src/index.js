
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let masComp = []
  for (i in matrix) {
    if (i % 2 == 1) {
      masComp.push(matrix[i].reverse())
    } else {
      masComp.push(matrix[i])
    }
  }
  return masComp;
}
