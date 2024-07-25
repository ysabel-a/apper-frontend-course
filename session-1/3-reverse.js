function reverse(word) {
    //initialize an empty string to input the reversed word to
    let reversedWord = ""  
    
    //iterate through the word from the last letter and each character is added to the revWord variable
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
    }
    
    return reversedWord
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'