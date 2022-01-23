
function isPalindrome(word) {
  // Write your algorithm here

  // "drow" is reverse "word"
  const drow = word.split("").reverse().join("");

  // comparing reversed and original strings
  return (word.toUpperCase() === drow.toUpperCase())
}

/* 
  Add your pseudocode here
 
 * Assign to a constant "drow" (inverted incomed string), incomed parameter "word" type of string that will be
 1) splitted to a single characters into array that will be:
 
 2) reversed (1srt element of array will be the last and second will be laat -1 and
   so on)  and will be 


 3) constructed to a string from charaters of that array.

* return Boolean result of comparing inverted and original string (both uppercased)
  
*/

/*
  Add written explanation of your solution here

  we take original string, reverse it and comparing with original string.
  if strings are the same, then original string is palindrome,

  to uppercased() was added for case insensitivity.

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // my custom tests
  console.log(" \n\n");
  console.log("1:Expecting: false");
  console.log("=>", isPalindrome("param"));

  console.log("2:Expecting: true");
  console.log("=>", isPalindrome("teneT"));

  console.log("3:Expecting: true");
  console.log("=>", isPalindrome("woow"));

  console.log("4:Expecting: true");
  console.log("=>", isPalindrome("wow wow"));







}

module.exports = isPalindrome;
