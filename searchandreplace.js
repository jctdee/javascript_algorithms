// function myReplace(str, before, after) {
//   const indBefore = str.indexOf(before);
//   if(str[indBefore].toUpperCase() === str[indBefore]){
//     let newString = str.replace(before,after);
//     const indAfter = newString.indexOf(after);
//     return newString.substring(0, indAfter) + after[0].toUpperCase() + newString.substring(indAfter+1);
//   } else if(str[indBefore].toLowerCase() === str[indBefore]) {
//     let newString = str.replace(before,after);
//     const indAfter = newString.indexOf(after);
//     return newString.substring(0, indAfter) + after[0].toLowerCase() + newString.substring(indAfter+1);
//   } else {
//     return str.replace(before,after);
//   }
// }

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  return str.replace(before, after);
}

console.log(myReplace("I think we should look up there", "up", "Down"));