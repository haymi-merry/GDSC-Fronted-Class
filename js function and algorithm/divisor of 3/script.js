function DivisorsOfThree(lowNum, highNum) {


  for (let i = lowNum; i <= highNum; i++) {


  
    let divOf3 = i.toString();

    // Check if the number is divisible by 3 or not
    if (i % 3 === 0) {
     divOf3 += " is div3"; 
    }else{
        divOf3 += " is not div3"; 
    }

    console.log(divOf3); 
  }
}

DivisorsOfThree(1, 10);
DivisorsOfThree(10, 15); 
DivisorsOfThree(15, 20);
DivisorsOfThree(25, 30); 
