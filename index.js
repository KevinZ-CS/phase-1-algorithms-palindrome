function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(word) {
    const reverseWord = reverseString(word);
    return word === reverseWord;
    
}

/* 
  reverse input string and store it in a variable
  compare the reverse string to the original input string
  if the strings match return true
  if not return false
*/ 

/*
  the reverseString function does the following:
  splits the input into a array
  reverses the order of the array
  joins the reversed array into a single string

  the isPalindrome function then calls the first function on the input to the function
  compares the results of the reverseString function and the original string input 
  and returns a Boolean value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
