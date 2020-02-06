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

			} else if (word.length === longestCount){
				counter++
			}
		}

		if (counter === arrayOfWords.length - 1) {
      		return "All have the same length"
    	} else {
      		return longestWord;
   		}
	}
}

//Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function exponenet(n , b){
	if (typeof n !== "number" || typeof b !== "number"){
		return TypeError("Enter a number for both n and b")
	} else {
		return Math.pow(n, b)
	}
}

function uniqueString(string){
	if (typeof string !== "string"){
		return TypeError("Enter the argument as a string")
	} else {
		let occurances = {};
		let array = string.toLowerCase().split("")

		array.forEach(item => {
			if(!occurances[item]){
				occurances[item] = 1
			} else {
				occurances[item]++
			}
		})

		let uniqueChar = []
		for (key in occurances){
			if (occurances[key] === 1){
				uniqueChar.push(key)
			}
		}

		return uniqueChar.join("")
	}
}

//write a JavaScript function that returns the longest palindrome in a given string
function longestPalindrome(str){
	if(typeof str !== "string"){
		return TypeError("Enter the argument as a string")
	} else if (str === " "){
		return Error("String cannot be empty")
	}else {
		let arrayOfWords = str.toLowerCase().split(" ")
		let listOfPalindromes = []

		arrayOfWords.forEach(word => {

			let reverseWord = word.split("").reverse().join("")
			if (word === reverseWord){
				listOfPalindromes.push(word)
			}
		})

		let initial = listOfPalindromes[0]
		let highest = initial.length
		let longestWord = initial

		for (let i = 1; i < listOfPalindromes.length; i++){
			let word = listOfPalindromes[i]
			if(word.length > highest){
				highest = word.length
				longestWord = word
			}
		}

		return longestWord;
	}
}

