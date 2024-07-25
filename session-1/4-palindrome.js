function isPalindrome(word) {
    //making the word lowercase to make sure the comparison is case insensitive
    word = word.toLowerCase()
    
    // shortened version to reverse the word
    // splits the word string into an array of individial characters, reverses the order of the elements in the array, and then combines all elements of array to form one string
    // let reversedWord = word.split('').reverse().join('')

    //longer version to reverse the word
    //same code as the one used in 3-reverse.js to reverse the word
    let reversedWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
    }

    //reversed word is compared to the original word; this returns a bool value
    return word === reversedWord
  }
  
  const word = 'yey'
  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }
  