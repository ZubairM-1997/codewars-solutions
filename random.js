// write a JavaScript function that reverses a number
function reverseNumber(number){
	if(typeof number !== "number"){
		return TypeError("you did not enter a number")
	}else{
	let reversedNumber = number.toString().split("").reverse().join("")
    return parseInt(reversedNumber, 10)
	}
}

//write a JavaScript function that tells us if a word is a palindrome or not
function determinePalindrome(word){
	if(typeof word !== "string"){
		return TypeError("Please enter a string")
	} else if(word === " "){
		return "Nothing Found"
	}
	else{
		let lowerCasedWord = word.toLowerCase();
		let reversedWord = lowerCasedWord.split("").reverse().join("")

		if (lowerCasedWord === reversedWord){
			return true
		}else{
			return false
		}
	}
}

// write a function that returns a passed string in alphabetical order
function alphabetical(word){
	if(typeof word !== "string"){
		return TypeError("Please enter a string")
	} else if(word === " "){
		return "Nothing Found"
	} else{
		return word.toLowerCase().split("").sort().filter(char => char !== " ").join("")
	}
}


//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
const longestWord = (str) => {
	if (typeof str !== "string"){
		return TypeError("Please enter a string")
	} else if (str === " "){
		return Error("String cannot be empty ")
	} else {

		let arrayOfWords = str.split(" ")
		let initalWord = arrayOfWords[0]
		let longestCount = initalWord.length
    let counter = 0

		let longestWord = initalWord

		for (let i = 1; i < arrayOfWords.length; i++){
			let word = arrayOfWords[i]
			if (word.length > longestCount){
				longestCount = word.length
				longestWord = word
			}else if (word.length === longestCount) {
        counter++
      }
		}

		if(counter === arrayOfWords.length - 1){
      return "All have the same length"
    }else {
      return longestWord;
    }
	}
}
