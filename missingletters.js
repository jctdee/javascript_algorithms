function fearNotLetter(str) {
  let compareString = [];
  for (let start=str[0].charCodeAt(0), end=str.slice(0-1).charCodeAt(0); start <= end; start++){
    compareString.push(String.fromCharCode(start));
  }
  if(compareString.join('').length == str.length) return undefined;
  const strSplit = str.split('');
  const missingLetter = compareString.filter(cmp => !strSplit.includes(cmp));
  return missingLetter;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));