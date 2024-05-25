function isPalindrome(word) {
  // Write your algorithm here
  // Check if the word is the same forward and backward
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1. Split the word into an array of characters.
  2. Reverse the array.
  3. Join the reversed array back into a string.
  4. Check if the reversed string is the same as the original word.
  5. Return true if they are the same, otherwise return false.
*/

/*
  Add written explanation of your solution here
  The function `isPalindrome` takes a string as input and checks whether it is a palindrome. A palindrome is a word that reads the same backward as forward. To determine this, the function first reverses the string by splitting it into an array of characters, reversing the array, and then joining the array back into a string. It then compares the reversed string with the original string. If they are the same, the function returns true, indicating that the input is a palindrome. Otherwise, it returns false.
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
