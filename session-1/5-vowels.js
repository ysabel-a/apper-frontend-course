// 5-vowels.js
function convertToVowels(word) {
    //shortened version
    //splits the word string into an array of individial characters, filter out the vowels in the array of characters, and combine all characters into one string
    //return word.split('').filter(char => 'aeiouAEIOU'.includes(char)).join('')

    //longer version using for loop
    let vowels = "" //initialize empty string to store vowels
    let char //initialize variable to assign each character in the word which will be used for checking if it is a vowel
    
    //iterate through the whole string
    for (let i = 0; i < word.length; i++) {
        char = word[i] //assign the current character of the word to char

        //check if char is a vowel; if it is a vowel, add it to the vowels string
        if ('aeiouAEIOU'.includes(char)) {
            vowels += char
        }
    }
    return vowels;
}
  
const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo
  