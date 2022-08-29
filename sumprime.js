function sumPrimes(num) {
  let primeNumbers = [];

  let primeNumberCount = 0;

  for(let i = 0; i <= num; i++){
    if(isPrime(i)) {
      primeNumbers.push(i);
      primeNumberCount++;
    }
  }

  function isPrime(nm) {
    if(nm < 2) return false;
    for(let i = 2, s = Math.sqrt(nm); i <= s; i++){
      if(nm % i === 0) return false; 
    }
    return true;
  }
  console.log(`total number of prime numbers: ${primeNumberCount}`);
  console.log(primeNumbers.filter(pn => pn > 650));
  return primeNumbers.reduce((itr,total) => itr+total);
}

console.log(sumPrimes(977));

// const isPrime = num => {
//   for(let i = 2, s = Math.sqrt(num); i <= s; i++){
//       if(num % i === 0) return false; 
//     }
//   return num > 1;
// }

// for(let i = 0; i < 10; i++){
//   if(isPrime(i)) console.log(`${i} is a prime number`);
// }

