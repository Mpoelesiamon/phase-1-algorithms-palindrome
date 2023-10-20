function isPalindrome(word) {
  str = str.replace(/[^a-z]/gi, '').toLowerCase();

  // Reverse the string and compare with the original
  const reversedStr = str.split('').reverse().join('');
  
  return str === reversedStr;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); 


/* 
  Add your pseudocode here
START
  function isPalindrome(str):
    1. Remove non-letter characters from str and convert it to lowercase.
    2. Initialize a variable reversedStr to an empty string.
    3. Loop through each character in str from the end to the beginning.
        a. Append the current character to reversedStr.
    4. Compare str with reversedStr.
    5. If they are equal, return true (it's a palindrome).
    6. Otherwise, return false (it's not a palindrome).
STOP
*/

/*
  Add written explanation of your solution here
  
Here's how the function works:

It takes a string, str, as input.
It removes non-letter characters from the string using a regular expression and converts the entire string to lowercase. This step ensures that the function works with case-insensitive palindromes.
It initializes an empty string, reversedStr, to store the reversed version of str.
The function then enters a loop that iterates through each character in str, starting from the end of the string and moving towards the beginning.
In each iteration, it appends the current character to the reversedStr.
After reversing the string, it compares the original str with reversedStr.
If they are equal, the function returns true, indicating that the input string is a palindrome.
If they are not equal, the function returns false, indicating that the input string is not a palindrome.
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
