function detectWord(crowd) {
  var hiddenWord = ""; 

  
  for (let i = 0; i < crowd.length; i++) {

     var char = crowd[i];

    // Check if the character is lowercase or not
    if (char === char.toLowerCase()) {
      // set the lowercase letter to the hidden word
      hiddenWord += char;
    }
  }

  console.log(hiddenWord); 
}


detectWord("UcUNFYGaFYFYGtNUH"); 
detectWord("bEEFGBuFBRrHgUHlNFYaYr"); 
detectWord("HDgDHUdDJsHGKJcJFHRGUH");
detectWord("HVsJJGHuBJBKmVHFmFHUUHVeFVHrVHBVHJ");
detectWord("VBHbFBoVHBoHVtE");
detectWord("BVHcFHHaKOKmHHFpGTFJ")
detectWord("BVHFJhNVaKFKyFHmHSi")