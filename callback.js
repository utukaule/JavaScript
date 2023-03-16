function myDisplayer(some) {
    return some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    return myCallback(sum);
  }
   
  console.log(myCalculator(5, 5, myDisplayer));