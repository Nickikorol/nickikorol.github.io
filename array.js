///---FIBONACCI--///

function generateFibonacciSequence(n){
    if (n === 0 || !Number.isInteger(n)) return null;
    if (n === 1) return [1];
  
    var fibo = [1, 1];
  
    for (i = 1; i <= n - 2; i++) {
      fibo.push(fibo[i] + fibo[i - 1]);
    }
  
    return fibo;
  }

  console.log(generateFibonacciSequence(7));
  console.log(generateFibonacciSequence(10));
  console.log(generateFibonacciSequence(2));
  console.log(generateFibonacciSequence(1));
  console.log(generateFibonacciSequence(0));


  
///---SHUFFLEArray---///

var names = [];
function shuffleArray(names) {
    for (var i = names.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var arr = names[i];
        names[i] = names[j];
        names[j] = arr;     ////// or: [names[i], names[rand]] = [names[rand], names[i]];
    }
    return names;
}

console.log(shuffleArray(["Андрій", "Марія", "Василь", "Петро"]));