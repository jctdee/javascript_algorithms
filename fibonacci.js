function sumFibs(num) {
  if(num >= 1) {
    if(num !== 1) {
      let n1 = 0, n2 = 1, nextTerm;
      let totalOdd = 0;
      let allNum = [n1,n2];
      nextTerm = n1+n2;
      allNum.push(nextTerm);
      while (nextTerm < num){
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1+n2;
        allNum.push(nextTerm);
      }

      const computeOdd = nm => {
        if(nm % 2 != 0 && nm <= num) {
          totalOdd += nm;
        }
      };
      allNum.forEach(computeOdd, allNum);
      return totalOdd;
    } else {
      return 1;
    }
    return undefined;
  }
}


console.log(sumFibs(4));

// fibonacci 5: 1,1,2,3,5