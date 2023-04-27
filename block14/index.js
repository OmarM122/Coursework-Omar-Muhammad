// write an algorithm that'll accept numbers and return them in a new array into odd numbers.
// I'm going to create an array that gives me 11, and 15 as my result. 

let array = [2,4,6,8,11,20,15,22];
let oddNumbers = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i]
    //console.log(element)
    if (element % 2 !== 0) {
        oddNumbers.push(element)}
} 

//console.log(oddNumbers)

// create an algorithm that makes a string of lowercase letters
// Print a word with how many consonants and vowels it has

let string = "hello"
let consonantCount = string.length
let vowelCount = 0
let vowels = ["a","e","i","o","u"]
for (let i = 0; i < string.length; i++) {
    const letter = string[i]
    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j]
        if (letter === vowel) {
            vowelCount++
            consonantCount--
        }
    
    }
}

console.log(`${string} has ${consonantCount} consanants and ${vowelCount} vowels`)