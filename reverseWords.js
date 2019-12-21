// Complete the function that accepts a string parameter, and reverses each word in the string.
//  All spaces in the string should be retained.

function reverseWords(str) {
	// Go for it
	if (typeof str !== "string"){
		throw new TypeError("You did not enter a string")
	} else {

		let words = str.split(" ")
		let string = []

		for (let i = 0; i < words.length; i++){
			string.push(words[i].split("").reverse().join(""))
		}

		let reversed = string.join(" ")
		console.log(reversed)
		return reversed
	}

  }

  reverseWords("Batman killed the joker")