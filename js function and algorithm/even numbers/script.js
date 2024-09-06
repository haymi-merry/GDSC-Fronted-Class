function isEvens(num) {

  // Convert the number to a string
  var stringNum = num.toString();
  let gdsc = 0;

  do {
    var digit = Number(stringNum[gdsc]);

    if (digit % 2 !== 0) {
      console.log(0);
      return;
    }

    gdsc++;
  } while (gdsc < stringNum.length);

  console.log(1);
}


isEvens(2426);  
isEvens(3224); 
isEvens(7777);
isEvens(6666); 
isEvens(2025);
isEvens(4682);
isEvens(1234);
isEvens(4682);
