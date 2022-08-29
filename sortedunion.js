function uniteUnique(...arr) {
  let tempNumbers = [];
  function pushToArray(a) {
    for(let i = 0; i < a.length; i++){
      tempNumbers.push(a[i]);
    }
  }
  arr.forEach(pushToArray, arr);
  const combinedNumbers = [...new Set(tempNumbers)];
  return combinedNumbers;
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));